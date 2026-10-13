
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DollarSignIcon as VanillaDollarSignIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DollarSignIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDollarSignIcon>
> = /*@__PURE__*/ build<VanillaDollarSignIcon, SvgProperties>(VanillaDollarSignIcon)
export const DollarSign: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDollarSignIcon>
> = DollarSignIcon
    