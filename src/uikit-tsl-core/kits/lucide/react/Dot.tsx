
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DotIcon as VanillaDotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDotIcon>
> = /*@__PURE__*/ build<VanillaDotIcon, SvgProperties>(VanillaDotIcon, "VanillaDotIcon")
export const Dot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDotIcon>
> = DotIcon
    