
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CandyIcon as VanillaCandyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CandyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCandyIcon>
> = /*@__PURE__*/ build<VanillaCandyIcon, SvgProperties>(VanillaCandyIcon, "VanillaCandyIcon")
export const Candy: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCandyIcon>
> = CandyIcon
    