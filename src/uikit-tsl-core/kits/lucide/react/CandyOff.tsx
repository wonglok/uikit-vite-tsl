
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CandyOffIcon as VanillaCandyOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CandyOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCandyOffIcon>
> = /*@__PURE__*/ build<VanillaCandyOffIcon, SvgProperties>(VanillaCandyOffIcon, "VanillaCandyOffIcon")
export const CandyOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCandyOffIcon>
> = CandyOffIcon
    