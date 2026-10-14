
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RefreshCcwDotIcon as VanillaRefreshCcwDotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RefreshCcwDotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRefreshCcwDotIcon>
> = /*@__PURE__*/ build<VanillaRefreshCcwDotIcon, SvgProperties>(VanillaRefreshCcwDotIcon, "VanillaRefreshCcwDotIcon")
export const RefreshCcwDot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRefreshCcwDotIcon>
> = RefreshCcwDotIcon
    