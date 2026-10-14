
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ImageOffIcon as VanillaImageOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ImageOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImageOffIcon>
> = /*@__PURE__*/ build<VanillaImageOffIcon, SvgProperties>(VanillaImageOffIcon, "VanillaImageOffIcon")
export const ImageOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImageOffIcon>
> = ImageOffIcon
    