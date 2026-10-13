import {
  Box3,
  DynamicDrawUsage,
  InstancedBufferAttribute,
  InstancedInterleavedBuffer,
  InterleavedBufferAttribute,
  Material,
  Mesh,
  Object3DEventMap,
  PlaneGeometry,
  Sphere,
} from 'three'
import { RootContext } from '../../context'
import { computeWorldToGlobalMatrix } from '../../utils'
import { glyphClippingAttributeNames } from './instanced-glyph-material'

export class InstancedGlyphMesh extends Mesh {
  public count = 0

  protected readonly isInstancedMesh = true
  public readonly instanceColor = null
  public readonly morphTexture = null
  public readonly boundingBox = new Box3()
  public readonly boundingSphere = new Sphere()

  private readonly customUpdateMatrixWorld = () => computeWorldToGlobalMatrix(this.root, this.matrixWorld)

  constructor(
    protected readonly root: Omit<RootContext, 'glyphGroupManager' | 'panelGroupManager'>,
    public readonly instanceMatrix: InstancedBufferAttribute,
    public readonly instanceRGBA: InstancedBufferAttribute,
    public readonly instanceUV: InstancedBufferAttribute,
    public readonly instanceClipping: InstancedBufferAttribute,
    public readonly instanceRenderSolid: InstancedBufferAttribute,
    material: Material,
  ) {
    const planeGeometry = new PlaneGeometry()
    planeGeometry.translate(0.5, -0.5, 0)
    super(planeGeometry, material)
    this.pointerEvents = 'none'
    planeGeometry.attributes.instanceUVOffset = instanceUV
    planeGeometry.attributes.instanceRGBA = instanceRGBA
    planeGeometry.attributes.instanceRenderSolid = instanceRenderSolid
    /*
     * The write side stores the four clipping planes as a single per-instance
     * mat4 (`instanceClipping`, 16 floats per glyph) — upstream's
     * `attribute mat4 instanceClipping`. A mat4 geometry attribute cannot be
     * read on WebGPU: three maps itemSize 16 to the invalid vertex format
     * `float32x16`, so the render pipeline fails as soon as the shader reads it.
     * (This is why it was left unread — the pipeline never saw it.)
     *
     * Re-expose the SAME backing Float32Array as four itemSize-4 strided views
     * (stride 16 floats, offsets 0/4/8/12), the itemSize-4 layout TSL reads
     * reliably. No copy is involved: the four views and the writer's mat4
     * attribute share one array, so every existing write path is untouched.
     *
     * DynamicDrawUsage makes the backend re-upload that shared buffer each draw,
     * because the updates are flagged on the original `instanceClipping`
     * attribute (no longer attached to the geometry) rather than on the views.
     * This mirrors the panel columns, which are also DynamicDrawUsage.
     */
    const clippingInterleaved = new InstancedInterleavedBuffer(
      instanceClipping.array as Float32Array,
      16,
      1,
    )
    clippingInterleaved.setUsage(DynamicDrawUsage)
    glyphClippingAttributeNames.forEach((name, index) => {
      planeGeometry.attributes[name] = new InterleavedBufferAttribute(
        clippingInterleaved,
        4,
        index * 4,
      )
    })
    this.frustumCulled = false
    root.onUpdateMatrixWorldSet.add(this.customUpdateMatrixWorld)
  }

  clone(): this {
    const cloned = new InstancedGlyphMesh(
      this.root,
      this.instanceMatrix,
      this.instanceRGBA,
      this.instanceUV,
      this.instanceClipping,
      this.instanceRenderSolid,
      this.material as Material,
    ) as this
    cloned.count = this.count
    return cloned
  }

  copy(): this {
    throw new Error('InstancedGlyphMesh.copy() is not supported. Use clone() instead.')
  }

  dispose() {
    this.root.onUpdateMatrixWorldSet.delete(this.customUpdateMatrixWorld)
    this.dispatchEvent({ type: 'dispose' as keyof Object3DEventMap })
    this.geometry.dispose()
  }

  //functions not needed because intersection (and morphing) is intenionally disabled
  computeBoundingBox(): void {}
  computeBoundingSphere(): void {}
  updateMorphTargets(): void {}
  raycast(): void {}
  spherecast(): void {}
}
