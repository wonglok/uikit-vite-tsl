
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TargetIcon as VanillaTargetIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TargetIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTargetIcon>
> = /*@__PURE__*/ build<VanillaTargetIcon, SvgProperties>(VanillaTargetIcon)
export const Target: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTargetIcon>
> = TargetIcon
    