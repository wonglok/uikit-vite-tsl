
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AppleIcon as VanillaAppleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AppleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAppleIcon>
> = /*@__PURE__*/ build<VanillaAppleIcon, SvgProperties>(VanillaAppleIcon, "VanillaAppleIcon")
export const Apple: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAppleIcon>
> = AppleIcon
    