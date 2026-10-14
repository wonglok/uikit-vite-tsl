
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ImageUpIcon as VanillaImageUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ImageUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImageUpIcon>
> = /*@__PURE__*/ build<VanillaImageUpIcon, SvgProperties>(VanillaImageUpIcon, "VanillaImageUpIcon")
export const ImageUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImageUpIcon>
> = ImageUpIcon
    