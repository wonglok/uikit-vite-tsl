/**
 * TSL PORT of upstream `panel/material/presets.ts`.
 *
 * Upstream presets extended the WebGL materials (`MeshPhongMaterial`,
 * `MeshPhysicalMaterial`). Under WebGPU these must be their *node* equivalents,
 * or `createPanelMaterial` has nowhere to attach the TSL graph.
 *
 * The constructor parameters are unchanged from upstream; the cast on the
 * physical-material options is needed because `MeshPhysicalNodeMaterial`'s
 * parameter type does not list every physical property upstream passes.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MeshPhongNodeMaterial, MeshPhysicalNodeMaterial } from 'three/webgpu'
import type { MaterialClass } from './create'

export class PlasticMaterial extends MeshPhongNodeMaterial {
  constructor() {
    super({
      specular: '#111',
      shininess: 100,
    })
  }
}

export class GlassMaterial extends MeshPhysicalNodeMaterial {
  constructor() {
    super({
      roughness: 0.1,
      reflectivity: 0.5,
      iridescence: 0.001,
      thickness: 0.05,
      metalness: 0.3,
      ior: 2,
    } as any)
  }
}

export class MetalMaterial extends MeshPhysicalNodeMaterial {
  constructor() {
    super({
      iridescence: 0.001,
      metalness: 0.8,
      roughness: 0.1,
    } as any)
  }
}

export const materialClasses = {
  glass: GlassMaterial,
  metal: MetalMaterial,
  plastic: PlasticMaterial,
}

export type PanelMaterialClass = MaterialClass | keyof typeof materialClasses

export function resolvePanelMaterialClassProperty(input: PanelMaterialClass): MaterialClass {
  if (typeof input != 'string') {
    return input
  }
  return materialClasses[input]
}
/* eslint-enable @typescript-eslint/no-explicit-any */
