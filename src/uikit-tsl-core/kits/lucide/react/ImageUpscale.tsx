
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ImageUpscaleIcon as VanillaImageUpscaleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ImageUpscaleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImageUpscaleIcon>
> = /*@__PURE__*/ build<VanillaImageUpscaleIcon, SvgProperties>(VanillaImageUpscaleIcon)
export const ImageUpscale: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImageUpscaleIcon>
> = ImageUpscaleIcon
    