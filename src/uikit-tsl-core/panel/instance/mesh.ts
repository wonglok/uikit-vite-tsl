import {
  Box3,
  InstancedBufferAttribute,
  InterleavedBufferAttribute,
  Mesh,
  Object3DEventMap,
  Sphere,
} from 'three'
import { createPanelGeometry } from '../geometry'
import {
  panelClippingAttributeNames,
  panelDataAttributeNames,
} from '../material/create'
import { RootContext } from '../../context'
import { computeWorldToGlobalMatrix } from '../../utils'

export class InstancedPanelMesh extends Mesh {
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
    public readonly dataColumns: Array<InterleavedBufferAttribute>,
    public readonly clippingColumns: Array<InterleavedBufferAttribute>,
  ) {
    const panelGeometry = createPanelGeometry()
    super(panelGeometry)
    this.pointerEvents = 'none'
    /*
     * TSL port: the descriptor is exposed as eight itemSize-4 interleaved views
     * (four data, four clipping) instead of upstream's single 16-float `aData`,
     * because three's TSL cannot read a 16-float-per-instance attribute (see
     * material/create.ts). All eight share one buffer, which keeps the panel
     * pipeline within WebGPU's 8-vertex-buffer limit — four separate data
     * attributes plus four separate clipping ones did not. The material looks
     * these up by name at draw time.
     */
    panelDataAttributeNames.forEach((name, index) => {
      panelGeometry.attributes[name] = dataColumns[index]!
    })
    panelClippingAttributeNames.forEach((name, index) => {
      panelGeometry.attributes[name] = clippingColumns[index]!
    })
    this.frustumCulled = false
    root.onUpdateMatrixWorldSet.add(this.customUpdateMatrixWorld)
  }

  dispose() {
    this.root.onUpdateMatrixWorldSet.delete(this.customUpdateMatrixWorld)
    this.dispatchEvent({ type: 'dispose' as keyof Object3DEventMap })
    this.geometry.dispose()
  }

  clone(): this {
    const cloned = new InstancedPanelMesh(
      this.root,
      this.instanceMatrix,
      this.dataColumns,
      this.clippingColumns,
    ) as this
    cloned.count = this.count
    cloned.material = this.material
    return cloned
  }

  copy(): this {
    throw new Error('InstancedPanelMesh.copy() is not supported. Use clone() instead.')
  }

  // Functions not needed because intersection and morphing are intentionally disabled.
  computeBoundingBox(): void {}
  computeBoundingSphere(): void {}
  updateMorphTargets(): void {}
  raycast(): void {}
  spherecast(): void {}
}
