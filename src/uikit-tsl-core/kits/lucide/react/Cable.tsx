
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CableIcon as VanillaCableIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CableIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCableIcon>
> = /*@__PURE__*/ build<VanillaCableIcon, SvgProperties>(VanillaCableIcon)
export const Cable: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCableIcon>
> = CableIcon
    