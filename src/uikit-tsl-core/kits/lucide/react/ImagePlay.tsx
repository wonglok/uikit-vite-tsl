
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ImagePlayIcon as VanillaImagePlayIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ImagePlayIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImagePlayIcon>
> = /*@__PURE__*/ build<VanillaImagePlayIcon, SvgProperties>(VanillaImagePlayIcon, "VanillaImagePlayIcon")
export const ImagePlay: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImagePlayIcon>
> = ImagePlayIcon
    