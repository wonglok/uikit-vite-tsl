
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ConeIcon as VanillaConeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ConeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaConeIcon>
> = /*@__PURE__*/ build<VanillaConeIcon, SvgProperties>(VanillaConeIcon, "VanillaConeIcon")
export const Cone: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaConeIcon>
> = ConeIcon
    