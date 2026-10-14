
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ImageMinusIcon as VanillaImageMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ImageMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImageMinusIcon>
> = /*@__PURE__*/ build<VanillaImageMinusIcon, SvgProperties>(VanillaImageMinusIcon, "VanillaImageMinusIcon")
export const ImageMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImageMinusIcon>
> = ImageMinusIcon
    