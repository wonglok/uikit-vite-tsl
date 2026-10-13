
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EyeIcon as VanillaEyeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EyeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEyeIcon>
> = /*@__PURE__*/ build<VanillaEyeIcon, SvgProperties>(VanillaEyeIcon)
export const Eye: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEyeIcon>
> = EyeIcon
    