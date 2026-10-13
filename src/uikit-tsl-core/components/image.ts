import { boolean, enum as enumSchema, string, union } from 'zod'
import type { z } from 'zod'
import {
  baseOutPropertiesSchema,
  createInPropertiesSchema,
  defineSchema,
  instanceSchema,
} from '../properties/schema'
import { Signal, computed, effect, signal } from '@preact/signals-core'
import { BaseOutProperties, InProperties, WithSignal } from '../properties/index'
import { Component } from './component'
import { Matrix3, SRGBColorSpace, Texture, TextureLoader, Vector2Tuple } from 'three'
import { abortableEffect, loadResourceWithParams, setupMatrixWorldUpdate } from '../utils'
import {
  createPanelMaterial,
  createPanelMaterialConfig,
  createPanelDepthMaterial,
  createPanelDistanceMaterial,
  PanelMaterialConfig,
  writeColor,
} from '../panel/material/index'
import { createGlobalClippingPlanes } from '../clipping'
import { Inset } from '../flex/index'
import { ElementType, setupOrderInfo, setupRenderOrder } from '../order'
import { componentDefaults } from '../properties/defaults'
import { RenderContext } from '../context'
import { resolvePanelMaterialClassProperty } from '../panel/material/presets'
import { toAbsoluteNumber } from '../text/utils'
import { parseNumberValue } from '../properties/values'
export const imageOutPropertiesSchema = /* @__PURE__ */ defineSchema(() =>
  baseOutPropertiesSchema.extend({
    src: union([string(), instanceSchema('Texture', Texture)]).optional(),
    objectFit: enumSchema(['cover', 'fill']).optional(),
    keepAspectRatio: boolean().optional(),
  }),
)
export const ImagePropertiesSchema = /* @__PURE__ */ defineSchema(() =>
  createInPropertiesSchema(imageOutPropertiesSchema),
)

export type ImageFit = 'cover' | 'fill'

export const imageDefaults = {
  ...componentDefaults,
  objectFit: 'fill' as ImageFit,
  keepAspectRatio: true,
}

export type ImageOutProperties<Src = string | Texture> = BaseOutProperties & {
  src?: Src
} & typeof imageDefaults
export type ImageProperties = z.input<typeof ImagePropertiesSchema>

export class Image<
  OutProperties extends ImageOutProperties<unknown> = ImageOutProperties<string | Texture>,
> extends Component<OutProperties> {
  readonly texture = signal<Texture | undefined>(undefined)

  constructor(
    inputProperties?: InProperties<OutProperties>,
    initialClasses?: Array<InProperties<BaseOutProperties> | string>,
    protected inputConfig?: {
      renderContext?: RenderContext
      defaultOverrides?: InProperties<OutProperties>
      loadTexture?: boolean
      defaults?: WithSignal<OutProperties>
    },
  ) {
    const aspectRatio = signal<number | undefined>(undefined)
    super(inputProperties, initialClasses, {
      defaults: imageDefaults as WithSignal<OutProperties>,
      hasNonUikitChildren: false,
      ...inputConfig,
      defaultOverrides: { aspectRatio, ...inputConfig?.defaultOverrides } as InProperties<OutProperties>,
    })

    setupOrderInfo(
      this.orderInfo,
      this.properties,
      'zIndex',
      ElementType.Image,
      undefined,
      computed(() => (this.parentContainer.value == null ? null : this.parentContainer.value.orderInfo.value)),
      this.abortSignal,
    )

    this.frustumCulled = false
    setupRenderOrder(this, this.root, this.orderInfo)

    if (inputConfig?.loadTexture ?? true) {
      loadResourceWithParams(
        this.texture,
        loadTextureImpl,
        cleanupTexture,
        this.abortSignal,
        this.properties.signal.src as Signal<string | Texture | undefined>,
      )
    }

    const clippingPlanes = createGlobalClippingPlanes(this)
    const isMeshVisible = getImageMaterialConfig().computedIsVisibile(
      this.properties,
      this.borderInset,
      this.size,
      computed(() => this.isVisible.value && this.texture.value != null),
    )

    const data = new Float32Array(16)
    const info = { data: data, type: 'normal' } as const
    // TSL port: these are factories now, not classes.
    const depthMaterial = createPanelDepthMaterial(info)
    const distanceMaterial = createPanelDistanceMaterial(info)
    depthMaterial.clippingPlanes = clippingPlanes
    distanceMaterial.clippingPlanes = clippingPlanes
    this.customDepthMaterial = depthMaterial
    this.customDistanceMaterial = distanceMaterial

    abortableEffect(() => {
      this.material.depthTest = this.properties.value.depthTest
      this.root.peek().requestRender?.()
    }, this.abortSignal)
    abortableEffect(() => {
      this.material.depthWrite = this.properties.value.depthWrite ?? false
      this.root.peek().requestRender?.()
    }, this.abortSignal)
    abortableEffect(() => {
      ;(this.material as any).map = this.texture.value ?? null
      this.material.needsUpdate = true
      this.root.peek().requestRender?.()
    }, this.abortSignal)
    abortableEffect(() => {
      const material = createPanelMaterial(
        resolvePanelMaterialClassProperty(this.properties.value.panelMaterialClass),
        info,
      )
      material.clippingPlanes = clippingPlanes
      ;(material as any).map = (this.material as any).map
      material.depthWrite = this.material.depthWrite
      material.depthTest = this.material.depthTest
      this.material = material
      return () => material.dispose()
    }, this.abortSignal)
    abortableEffect(() => {
      this.renderOrder = parseNumberValue(this.properties.value.renderOrder ?? 0)
      this.root.peek().requestRender?.()
    }, this.abortSignal)
    abortableEffect(() => {
      this.castShadow = this.properties.value.castShadow
      this.root.peek().requestRender?.()
    }, this.abortSignal)
    abortableEffect(() => {
      this.receiveShadow = this.properties.value.receiveShadow
      this.root.peek().requestRender?.()
    }, this.abortSignal)

    setupMatrixWorldUpdate(this, this.root, this.globalPanelMatrix, this.abortSignal)

    const imageMaterialConfig = getImageMaterialConfig()
    abortableEffect(() => {
      if (!this.isVisible.value) {
        return
      }

      data.set(imageMaterialConfig.defaultData)

      const cleanupSizeEffect = effect(() => {
        const size = this.size.value
        if (size != null) {
          data.set(size, 14)
        }
      })
      const cleanupBorderEffect = effect(() => {
        const borderInset = this.borderInset.value
        if (borderInset != null) {
          data.set(borderInset, 0)
        }
      })
      this.root.peek().requestRender?.()
      return () => {
        cleanupSizeEffect()
        cleanupBorderEffect()
      }
    }, this.abortSignal)
    abortableEffect(() => {
      if (!this.isVisible.value) {
        return
      }
      const opacity = toAbsoluteNumber(this.properties.value.opacity ?? 1, () => 1)
      writeColor(data, 4, 0xffffff, opacity, undefined)
      this.root.peek().requestRender?.()
    }, this.abortSignal)
    const setters = imageMaterialConfig.setters
    abortableEffect(() => {
      if (!this.isVisible.value) {
        return
      }
      return this.properties.subscribePropertyKeys((key) => {
        if (!imageMaterialConfig.hasProperty(key as string)) {
          return
        }
        abortableEffect(() => {
          setters[key as any]!(
            data,
            0,
            this.properties.value[key as keyof OutProperties],
            this.size,
            this.properties.signal.opacity,
            undefined,
          )
          this.root.peek().requestRender?.()
        }, this.abortSignal)
      })
    }, this.abortSignal)

    abortableEffect(() => {
      const texture = this.texture.value
      const size = this.size.value
      const borderInset = this.borderInset.value
      if (texture == null || size == null || borderInset == null) {
        return
      }
      texture.matrix.identity()
      this.root.peek().requestRender?.()

      if (this.properties.value.objectFit === 'fill' || texture == null) {
        transformInsideBorder(borderInset, size, texture)
        return
      }

      const { width: textureWidth, height: textureHeight } = texture.source.data as { width: number; height: number }
      const textureRatio = textureWidth / textureHeight

      const [width, height] = size
      const [top, right, bottom, left] = borderInset
      const boundsRatioValue = (width - left - right) / (height - top - bottom)

      if (textureRatio > boundsRatioValue) {
        composeTranslateScale(
          texture.matrix,
          -(0.5 * (boundsRatioValue - textureRatio)) / boundsRatioValue,
          0,
          boundsRatioValue / textureRatio,
          1,
        )
      } else {
        composeTranslateScale(
          texture.matrix,
          0,
          -(0.5 * (textureRatio - boundsRatioValue)) / textureRatio,
          1,
          textureRatio / boundsRatioValue,
        )
      }
      transformInsideBorder(borderInset, size, texture)
    }, this.abortSignal)
    abortableEffect(() => {
      this.visible = isMeshVisible.value
      this.root.peek().requestRender?.()
    }, this.abortSignal)

    abortableEffect(() => {
      if (!this.properties.value.keepAspectRatio) {
        aspectRatio.value = undefined
        return
      }
      const tex = this.texture.value
      if (tex == null) {
        aspectRatio.value = undefined
        return
      }
      // `Texture.source.data` is `unknown` as of @types/three 0.186; upstream
      // relied on an older, looser declaration.
      const image = tex.source.data as {
        videoWidth?: number
        videoHeight?: number
        naturalWidth?: number
        naturalHeight?: number
        width?: number
        height?: number
      }
      const width = image.videoWidth ?? image.naturalWidth ?? image.width ?? 0
      const height = image.videoHeight ?? image.naturalHeight ?? image.height ?? 0
      aspectRatio.value = width / height
    }, this.abortSignal)
  }

  clone(recursive?: boolean): this {
    const cloned = new Image(this.inputProperties, this.initialClasses, this.inputConfig) as this
    this.copyInto(cloned, recursive)
    return cloned
  }

  add(): this {
    throw new Error(`the image component can not have any children`)
  }
}

const SCRATCH_TRANSLATION = new Matrix3()
const SCRATCH_SCALE = new Matrix3()

/**
 * `matrix.translate(tx, ty).scale(sx, sy)` without the deprecated
 * Matrix3.translate/scale methods.
 *
 * `makeTranslation`/`makeScale` OVERWRITE their target rather than accumulate,
 * so the deprecated setters are not interchangeable with them in general.
 * The deprecated `.translate()`/`.scale()` post-multiplied onto the current
 * matrix, so this composes the same way via `multiply` — translate first, then
 * scale, which leaves the translation scaled by the scale. It intentionally
 * does NOT reset `matrix` first: `transformInsideBorder` runs on top of the
 * object-fit 'cover' transform, which an extra `identity()` would wipe.
 */
function composeTranslateScale(matrix: Matrix3, tx: number, ty: number, sx: number, sy: number): Matrix3 {
  matrix.multiply(SCRATCH_TRANSLATION.makeTranslation(tx, ty))
  matrix.multiply(SCRATCH_SCALE.makeScale(sx, sy))
  return matrix
}

function transformInsideBorder(borderInset: Inset, size: Vector2Tuple, texture: Texture): void {
  const [outerWidth, outerHeight] = size
  const [top, right, bottom, left] = borderInset

  const width = outerWidth - left - right
  const height = outerHeight - top - bottom

  composeTranslateScale(
    texture.matrix,
    -1 + (left + width) / outerWidth,
    -1 + (top + height) / outerHeight,
    outerWidth / width,
    outerHeight / height,
  )
}

const textureLoader = new TextureLoader()

function cleanupTexture(texture: (Texture & { disposable?: boolean }) | undefined): void {
  if (texture?.disposable === true) {
    texture.dispose()
  }
}

async function loadTextureImpl(src?: string | Texture): Promise<(Texture & { disposable?: boolean }) | undefined> {
  if (src == null) {
    return Promise.resolve(undefined)
  }
  if (src instanceof Texture) {
    return Promise.resolve(src)
  }
  try {
    const texture = await textureLoader.loadAsync(src)
    texture.colorSpace = SRGBColorSpace
    texture.matrixAutoUpdate = false
    return Object.assign(texture, { disposable: true })
  } catch (error) {
    console.error(error)
    return undefined
  }
}

let imageMaterialConfig: PanelMaterialConfig | undefined
function getImageMaterialConfig() {
  imageMaterialConfig ??= createPanelMaterialConfig(
    {
      borderBend: 'borderBend',
      borderBottomLeftRadius: 'borderBottomLeftRadius',
      borderBottomRightRadius: 'borderBottomRightRadius',
      borderColor: 'borderColor',
      borderTopLeftRadius: 'borderTopLeftRadius',
      borderTopRightRadius: 'borderTopRightRadius',
    },
    {
      backgroundColor: 0xffffff,
    },
  )
  return imageMaterialConfig
}
