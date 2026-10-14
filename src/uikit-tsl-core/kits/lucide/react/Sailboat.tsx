
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SailboatIcon as VanillaSailboatIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SailboatIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSailboatIcon>
> = /*@__PURE__*/ build<VanillaSailboatIcon, SvgProperties>(VanillaSailboatIcon, "VanillaSailboatIcon")
export const Sailboat: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSailboatIcon>
> = SailboatIcon
    