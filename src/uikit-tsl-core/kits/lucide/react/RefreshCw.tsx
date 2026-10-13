
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RefreshCwIcon as VanillaRefreshCwIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RefreshCwIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRefreshCwIcon>
> = /*@__PURE__*/ build<VanillaRefreshCwIcon, SvgProperties>(VanillaRefreshCwIcon)
export const RefreshCw: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRefreshCwIcon>
> = RefreshCwIcon
    