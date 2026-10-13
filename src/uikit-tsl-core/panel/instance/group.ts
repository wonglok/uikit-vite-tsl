import {
  DynamicDrawUsage,
  InstancedBufferAttribute,
  InstancedInterleavedBuffer,
  InterleavedBufferAttribute,
  Material,
} from 'three'
import {
  Bucket,
  addToSortedBuckets,
  removeFromSortedBuckets,
  resizeSortedBucketsSpace,
  updateSortedBucketsAllocation,
} from '../../allocation/sorted-buckets'
import type { Component } from '../../components/component'
import { RootContext } from '../../context'
import { OrderInfo, setupRenderOrder } from '../../order'
import { createPanelMaterial } from '../material/create'
import { createPanelDepthMaterial, createPanelDistanceMaterial } from '../material/depth'
import { resolvePanelMaterialClassProperty } from '../material/presets'
import { InstancedPanelMesh } from './mesh'
import type { InstancedPanel } from './panel'
import type { PanelGroupProperties } from './properties'
import { parseNumberValue } from '../../properties/values'

const nextFrame = Symbol('nextFrame')

/**
 * Floats per panel instance in the shared GPU buffer: 16 descriptor + 16 clipping.
 */
const DESCRIPTOR_STRIDE = 32

/** Float offset of the clipping half within each instance. */
const CLIPPING_BASE_OFFSET = 16

/**
 * TSL port: scatters a flat 16-float CPU descriptor into four itemSize-4 views of
 * the shared interleaved descriptor buffer.
 *
 * WHY ONE INTERLEAVED BUFFER RATHER THAN EIGHT SEPARATE ATTRIBUTES
 * WebGPU caps a pipeline at 8 vertex buffers, and three assigns one buffer per
 * distinct `BufferAttribute` — `createShaderVertexBuffers` keys its layout map by
 * the backing buffer, falling back to one slot per attribute. Eight separate
 * columns therefore cost eight slots, and adding position, uv and instanceMatrix
 * overflows the cap: the pipeline becomes invalid and the descriptors read as
 * garbage (every panel picked up the same colour). Interleaving the 16 data
 * floats and the 16 clipping floats into a single stride-32 buffer with eight
 * views costs exactly ONE slot. `text/render/instanced-glyph-mesh.ts` solved the
 * identical problem the same way.
 *
 * The flat per-instance arrays remain the CPU-side source of truth so every
 * existing write path — `materialSetters`, `panel.ts` — is unchanged.
 */
function scatterColumns(
  source: Float32Array,
  target: Float32Array,
  baseOffset: number,
  startInstance: number,
  count: number,
) {
  const end = startInstance + count
  for (let instance = startInstance; instance < end; instance += 1) {
    const sourceBase = instance * 16
    const targetBase = instance * DESCRIPTOR_STRIDE + baseOffset
    for (let offset = 0; offset < 16; offset += 1) {
      target[targetBase + offset] = source[sourceBase + offset]!
    }
  }
}

export class InstancedPanelGroup {
  private mesh?: InstancedPanelMesh
  public instanceMatrix!: InstancedBufferAttribute
  public instanceData!: InstancedBufferAttribute
  public instanceClipping!: InstancedBufferAttribute
  /*
   * TSL port: the material reads its descriptor from NAMED geometry attributes,
   * which the renderer resolves per draw. It therefore does not need rebuilding
   * when `resize()` reallocates the buffers — only these column attributes do.
   */
  private readonly instanceMaterial: Material
  private readonly instanceDepthMaterial: Material
  private readonly instanceDistanceMaterial: Material
  /**
   * The single GPU buffer holding every per-instance float: 16 descriptor floats
   * per instance followed by 16 clipping floats, stride 32. Kept as one buffer so
   * the whole descriptor costs ONE WebGPU vertex-buffer slot. See `scatterColumns`.
   */
  private descriptorBuffer?: InstancedInterleavedBuffer
  /** `aData0..3` — itemSize-4 views at float offsets 0/4/8/12 of the stride. */
  public dataColumns: Array<InterleavedBufferAttribute> = []
  /** `aClipping0..3` — itemSize-4 views at float offsets 16/20/24/28. */
  public clippingColumns: Array<InterleavedBufferAttribute> = []

  private buckets: Array<Bucket<InstancedPanel>> = []
  private elementCount: number = 0
  private bufferElementSize: number = 0

  public instanceDataOnUpdate!: InstancedBufferAttribute['addUpdateRange']

  private nextUpdateTime: typeof nextFrame | number | undefined
  private nextUpdateTimeoutRef: NodeJS.Timeout | undefined

  private activateElement = (element: InstancedPanel, bucket: Bucket<InstancedPanel>, indexInBucket: number) => {
    const index = bucket.offset + indexInBucket
    // TEMP DEBUG (switch thumb investigation) — remove.
    ;(globalThis as any).__actLog ??= []
    ;(globalThis as any).__actLog.push({ index, t: Math.round(performance.now()) })
    this.instanceData.set(element.materialConfig.defaultData, 16 * index)
    this.markDataUpdated(16 * index, 16)
    element.activate(bucket, indexInBucket)
  }

  private setElementIndex = (element: InstancedPanel, index: number) => {
    element.setIndexInBucket(index)
  }

  private bufferCopyWithin = (targetIndex: number, startIndex: number, endIndex: number) => {
    // TEMP DEBUG (switch thumb investigation) — remove.
    ;(globalThis as any).__cpLog ??= []
    ;(globalThis as any).__cpLog.push({
      targetIndex,
      startIndex,
      endIndex,
      t: Math.round(performance.now()),
      arrSame: this.instanceData.array === (globalThis as any).__groups?.[0]?.instanceData?.array,
    })
    copyWithinAttribute(this.instanceMatrix, targetIndex, startIndex, endIndex)
    copyWithinAttribute(this.instanceData, targetIndex, startIndex, endIndex)
    copyWithinAttribute(this.instanceClipping, targetIndex, startIndex, endIndex)
    /*
     * The copies above only move the flat CPU descriptors; the GPU reads the
     * interleaved buffer, which nothing else refreshes on a bucket move. Without
     * this the moved instances keep rendering the previous occupant's descriptor
     * (which is exactly a black/blank panel at a stale index).
     */
    const first = Math.min(targetIndex, startIndex)
    this.scatter(first, endIndex - first)
  }

  private clearBufferAt = (index: number) => {
    // Hiding the element by writing a 0 matrix.
    const bufferOffset = index * 16
    this.instanceMatrix.array.fill(0, bufferOffset, bufferOffset + 16)
    this.instanceMatrix.addUpdateRange(bufferOffset, 16)
    this.instanceMatrix.needsUpdate = true
  }

  constructor(
    private readonly object: Component,
    public readonly root: Omit<RootContext, 'glyphGroupManager' | 'panelGroupManager'>,
    private readonly orderInfo: OrderInfo,
    private readonly panelGroupProperties: Required<PanelGroupProperties>,
  ) {
    // TEMP DEBUG (switch thumb investigation) — remove.
    ;(globalThis as any).__groups ??= []
    ;(globalThis as any).__groups.push(this)
    const materialClass = resolvePanelMaterialClassProperty(panelGroupProperties.panelMaterialClass)
    this.instanceMaterial = createPanelMaterial(materialClass, { type: 'instanced' })
    this.instanceMaterial.depthTest = panelGroupProperties.depthTest
    this.instanceMaterial.depthWrite = panelGroupProperties.depthWrite
    this.instanceDepthMaterial = createPanelDepthMaterial({ type: 'instanced' })
    this.instanceDistanceMaterial = createPanelDistanceMaterial({ type: 'instanced' })
  }

  /**
   * Marks a flat-descriptor range dirty and re-scatters it into the GPU columns.
   * Every write path funnels through here so the flat array can stay the single
   * source of truth.
   */
  public markDataUpdated(offset: number, count: number): void {
    this.instanceData.addUpdateRange(offset, count)
    this.instanceData.needsUpdate = true
    const first = Math.floor(offset / 16)
    const last = Math.floor((offset + Math.max(count, 1) - 1) / 16)
    // TEMP DEBUG (switch thumb investigation) — remove.
    ;(globalThis as any).__markLog ??= []
    ;(globalThis as any).__markLog.push({ offset, count, first, last, t: performance.now() })
    this.scatter(first, last - first + 1)
  }

  /** Same, for the clipping descriptor. */
  public markClippingUpdated(offset: number, count: number): void {
    this.instanceClipping.addUpdateRange(offset, count)
    this.instanceClipping.needsUpdate = true
    const first = Math.floor(offset / 16)
    const last = Math.floor((offset + Math.max(count, 1) - 1) / 16)
    this.scatter(first, last - first + 1)
  }

  /**
   * Re-copies a `count`-instance range of both flat descriptors into the GPU
   * interleaved buffer and marks it for re-upload.
   *
   * Both halves are copied every time rather than tracking which one changed:
   * the copy is a linear memcpy-sized loop over at most a few hundred instances,
   * it runs only on actual mutations, and keeping one path means the two halves
   * can never drift out of sync. A stale descriptor is far more expensive to
   * debug than this is to run.
   */
  private scatter(startInstance: number, count: number): void {
    // TEMP DEBUG (switch thumb investigation) — remove.
    ;(globalThis as any).__scatterLog ??= []
    ;(globalThis as any).__scatterLog.push({
      start: startInstance,
      count,
      t: performance.now(),
      nullBuffer: this.descriptorBuffer == null,
      covers8: startInstance <= 8 && 8 < startInstance + count,
      src8Color: this.instanceData ? Array.from(this.instanceData.array.slice(128 + 4, 128 + 8)) : null,
    })
    if (this.descriptorBuffer == null) {
      return
    }
    // `InterleavedBuffer.array` is declared as a union of typed arrays; ours is
    // always a Float32Array, built in `resize`.
    const target = this.descriptorBuffer.array as Float32Array
    scatterColumns(this.instanceData.array as Float32Array, target, 0, startInstance, count)
    scatterColumns(
      this.instanceClipping.array as Float32Array,
      target,
      CLIPPING_BASE_OFFSET,
      startInstance,
      count,
    )
    // InterleavedBuffer has no update ranges; bumping `version` is what makes
    // three re-upload the whole buffer on the next draw.
    this.descriptorBuffer.needsUpdate = true
  }

  private updateCount(): void {
    const lastBucket = this.buckets[this.buckets.length - 1]!
    const count = lastBucket.offset + lastBucket.elements.length
    if (this.mesh == null) {
      return
    }
    this.mesh.count = count
    this.mesh.visible = count > 0
    this.root.requestRender?.()
  }

  private requestUpdate(time: number): void {
    if (this.nextUpdateTime == nextFrame) {
      return
    }

    const forTime = performance.now() + time

    if (this.nextUpdateTime != null && this.nextUpdateTime < forTime) {
      return
    }
    this.nextUpdateTime = forTime
    clearTimeout(this.nextUpdateTimeoutRef)
    this.nextUpdateTimeoutRef = setTimeout(this.requestUpdateNextFrame.bind(this), time)
  }

  private requestUpdateNextFrame() {
    this.nextUpdateTime = nextFrame
    clearTimeout(this.nextUpdateTimeoutRef)
    this.nextUpdateTimeoutRef = undefined
    this.root.requestFrame?.()
  }

  insert(bucketIndex: number, panel: InstancedPanel): void {
    this.elementCount += 1
    if (!addToSortedBuckets(this.buckets, bucketIndex, panel, this.activateElement)) {
      this.updateCount()
      return
    }
    this.requestUpdateNextFrame()
  }

  delete(bucketIndex: number, elementIndex: number | undefined, panel: InstancedPanel): void {
    this.elementCount -= 1
    if (
      !removeFromSortedBuckets(
        this.buckets,
        bucketIndex,
        panel,
        elementIndex,
        this.activateElement,
        this.clearBufferAt,
        this.setElementIndex,
        this.bufferCopyWithin,
      )
    ) {
      this.updateCount()
      return
    }
    this.root.requestRender?.()
    this.requestUpdate(1000)
  }

  onFrame(): void {
    if (this.nextUpdateTime != nextFrame) {
      return
    }
    this.nextUpdateTime = undefined
    this.update()
  }

  private update(): void {
    if (this.elementCount === 0) {
      if (this.mesh != null) {
        this.mesh.visible = false
      }
      return
    }
    if (this.elementCount > this.bufferElementSize) {
      this.resize()
      updateSortedBucketsAllocation(this.buckets, this.activateElement, this.bufferCopyWithin)
    } else if (this.elementCount <= this.bufferElementSize / 3) {
      updateSortedBucketsAllocation(this.buckets, this.activateElement, this.bufferCopyWithin)
      this.resize()
    } else {
      updateSortedBucketsAllocation(this.buckets, this.activateElement, this.bufferCopyWithin)
    }
    this.mesh!.count = this.elementCount
    this.mesh!.visible = true
  }

  private resize(): void {
    const oldBufferSize = this.bufferElementSize
    this.bufferElementSize = Math.ceil(this.elementCount * 1.5)
    if (this.mesh != null) {
      this.mesh.dispose()
      this.object.remove(this.mesh)
    }
    resizeSortedBucketsSpace(this.buckets, oldBufferSize, this.bufferElementSize)
    const matrixArray = new Float32Array(this.bufferElementSize * 16)
    if (this.instanceMatrix != null) {
      matrixArray.set(this.instanceMatrix.array.subarray(0, matrixArray.length))
    }
    this.instanceMatrix = new InstancedBufferAttribute(matrixArray, 16, false)
    this.instanceMatrix.setUsage(DynamicDrawUsage)
    const dataArray = new Float32Array(this.bufferElementSize * 16)
    if (this.instanceData != null) {
      dataArray.set(this.instanceData.array.subarray(0, dataArray.length))
    }
    this.instanceData = new InstancedBufferAttribute(dataArray, 16, false)
    this.instanceDataOnUpdate = (start, count) => {
      this.markDataUpdated(start, count)
    }
    this.instanceData.setUsage(DynamicDrawUsage)
    const clippingArray = new Float32Array(this.bufferElementSize * 16)
    if (this.instanceClipping != null) {
      clippingArray.set(this.instanceClipping.array.subarray(0, clippingArray.length))
    }
    this.instanceClipping = new InstancedBufferAttribute(clippingArray, 16, false)
    this.instanceClipping.setUsage(DynamicDrawUsage)
    /*
     * Allocate the single interleaved GPU descriptor buffer the TSL material
     * reads, then seed it from the freshly allocated (and preserved) flat
     * descriptors. This MUST happen before the mesh is constructed: the mesh
     * attaches the eight views to its geometry, and handing it an empty list
     * puts `undefined` into `geometry.attributes`, which makes three's
     * render-object cache key throw on `.data` every frame.
     *
     * Preserving the old contents matters for the same reason the flat arrays
     * are preserved above — a resize triggered by a single insertion must not
     * blank every other panel.
     */
    const descriptorArray = new Float32Array(this.bufferElementSize * DESCRIPTOR_STRIDE)
    if (this.descriptorBuffer != null) {
      descriptorArray.set(
        this.descriptorBuffer.array.subarray(0, descriptorArray.length),
      )
    }
    const descriptorBuffer = new InstancedInterleavedBuffer(descriptorArray, DESCRIPTOR_STRIDE, 1)
    descriptorBuffer.setUsage(DynamicDrawUsage)
    this.descriptorBuffer = descriptorBuffer
    this.dataColumns = allocateColumns(descriptorBuffer, 0)
    this.clippingColumns = allocateColumns(descriptorBuffer, CLIPPING_BASE_OFFSET)
    this.scatter(0, this.bufferElementSize)

    this.mesh = new InstancedPanelMesh(
      this.root,
      this.instanceMatrix,
      this.dataColumns,
      this.clippingColumns,
    )
    this.mesh.renderOrder = parseNumberValue(this.panelGroupProperties.renderOrder)
    setupRenderOrder(this.mesh, { peek: () => this.root }, { value: this.orderInfo })

    this.mesh.customDepthMaterial = this.instanceDepthMaterial
    this.mesh.customDistanceMaterial = this.instanceDistanceMaterial

    this.mesh.material = this.instanceMaterial
    this.mesh.receiveShadow = this.panelGroupProperties.receiveShadow
    this.mesh.castShadow = this.panelGroupProperties.castShadow
    this.object.addUnsafe(this.mesh)
  }

  destroy() {
    clearTimeout(this.nextUpdateTimeoutRef)
    if (this.mesh == null) {
      return
    }
    this.object.remove(this.mesh)
    this.mesh?.dispose()
    this.instanceMaterial.dispose()
    this.instanceDepthMaterial.dispose()
    this.instanceDistanceMaterial.dispose()
  }
}

/**
 * Four itemSize-4 views into one interleaved descriptor buffer, at float offsets
 * `baseOffset + 0/4/8/12`. All four share the buffer's Float32Array, so they cost
 * one vertex-buffer slot between them rather than four.
 */
function allocateColumns(
  buffer: InstancedInterleavedBuffer,
  baseOffset: number,
): Array<InterleavedBufferAttribute> {
  return [0, 1, 2, 3].map(
    (index) => new InterleavedBufferAttribute(buffer, 4, baseOffset + index * 4),
  )
}

function copyWithinAttribute(
  attribute: InstancedBufferAttribute,
  targetIndex: number,
  startIndex: number,
  endIndex: number,
) {
  const itemSize = attribute.itemSize
  const start = startIndex * itemSize
  const end = endIndex * itemSize
  const target = targetIndex * itemSize
  attribute.array.copyWithin(target, start, end)
  const count = end - start
  attribute.addUpdateRange(start, count)
  attribute.addUpdateRange(target, count)
  attribute.needsUpdate = true
}
