
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CopyCheckIcon as VanillaCopyCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CopyCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCopyCheckIcon>
> = /*@__PURE__*/ build<VanillaCopyCheckIcon, SvgProperties>(VanillaCopyCheckIcon, "VanillaCopyCheckIcon")
export const CopyCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCopyCheckIcon>
> = CopyCheckIcon
    