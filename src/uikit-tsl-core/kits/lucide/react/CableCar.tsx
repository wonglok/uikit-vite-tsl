
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CableCarIcon as VanillaCableCarIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CableCarIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCableCarIcon>
> = /*@__PURE__*/ build<VanillaCableCarIcon, SvgProperties>(VanillaCableCarIcon)
export const CableCar: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCableCarIcon>
> = CableCarIcon
    