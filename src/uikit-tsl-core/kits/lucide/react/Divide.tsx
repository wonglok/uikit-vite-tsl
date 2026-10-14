
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DivideIcon as VanillaDivideIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DivideIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDivideIcon>
> = /*@__PURE__*/ build<VanillaDivideIcon, SvgProperties>(VanillaDivideIcon, "VanillaDivideIcon")
export const Divide: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDivideIcon>
> = DivideIcon
    