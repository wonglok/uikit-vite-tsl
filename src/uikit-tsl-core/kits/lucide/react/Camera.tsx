
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CameraIcon as VanillaCameraIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CameraIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCameraIcon>
> = /*@__PURE__*/ build<VanillaCameraIcon, SvgProperties>(VanillaCameraIcon)
export const Camera: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCameraIcon>
> = CameraIcon
    