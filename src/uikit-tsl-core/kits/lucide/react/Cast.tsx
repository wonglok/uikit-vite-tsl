
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CastIcon as VanillaCastIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CastIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCastIcon>
> = /*@__PURE__*/ build<VanillaCastIcon, SvgProperties>(VanillaCastIcon, "VanillaCastIcon")
export const Cast: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCastIcon>
> = CastIcon
    