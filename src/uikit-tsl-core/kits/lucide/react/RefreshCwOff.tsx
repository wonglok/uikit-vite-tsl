
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RefreshCwOffIcon as VanillaRefreshCwOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RefreshCwOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRefreshCwOffIcon>
> = /*@__PURE__*/ build<VanillaRefreshCwOffIcon, SvgProperties>(VanillaRefreshCwOffIcon)
export const RefreshCwOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRefreshCwOffIcon>
> = RefreshCwOffIcon
    