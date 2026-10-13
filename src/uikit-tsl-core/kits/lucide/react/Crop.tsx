
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CropIcon as VanillaCropIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CropIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCropIcon>
> = /*@__PURE__*/ build<VanillaCropIcon, SvgProperties>(VanillaCropIcon)
export const Crop: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCropIcon>
> = CropIcon
    