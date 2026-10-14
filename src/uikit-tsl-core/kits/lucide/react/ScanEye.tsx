
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScanEyeIcon as VanillaScanEyeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScanEyeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanEyeIcon>
> = /*@__PURE__*/ build<VanillaScanEyeIcon, SvgProperties>(VanillaScanEyeIcon, "VanillaScanEyeIcon")
export const ScanEye: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanEyeIcon>
> = ScanEyeIcon
    