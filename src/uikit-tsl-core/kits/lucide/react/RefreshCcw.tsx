
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RefreshCcwIcon as VanillaRefreshCcwIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RefreshCcwIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRefreshCcwIcon>
> = /*@__PURE__*/ build<VanillaRefreshCcwIcon, SvgProperties>(VanillaRefreshCcwIcon, "VanillaRefreshCcwIcon")
export const RefreshCcw: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRefreshCcwIcon>
> = RefreshCcwIcon
    