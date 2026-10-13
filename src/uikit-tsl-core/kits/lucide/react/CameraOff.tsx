
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CameraOffIcon as VanillaCameraOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CameraOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCameraOffIcon>
> = /*@__PURE__*/ build<VanillaCameraOffIcon, SvgProperties>(VanillaCameraOffIcon)
export const CameraOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCameraOffIcon>
> = CameraOffIcon
    