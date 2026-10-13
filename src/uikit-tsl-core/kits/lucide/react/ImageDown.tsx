
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ImageDownIcon as VanillaImageDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ImageDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImageDownIcon>
> = /*@__PURE__*/ build<VanillaImageDownIcon, SvgProperties>(VanillaImageDownIcon)
export const ImageDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImageDownIcon>
> = ImageDownIcon
    