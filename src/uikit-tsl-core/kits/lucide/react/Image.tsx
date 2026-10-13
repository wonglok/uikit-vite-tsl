
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ImageIcon as VanillaImageIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ImageIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImageIcon>
> = /*@__PURE__*/ build<VanillaImageIcon, SvgProperties>(VanillaImageIcon)
export const Image: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImageIcon>
> = ImageIcon
    