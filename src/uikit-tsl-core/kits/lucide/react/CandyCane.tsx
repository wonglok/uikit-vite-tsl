
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CandyCaneIcon as VanillaCandyCaneIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CandyCaneIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCandyCaneIcon>
> = /*@__PURE__*/ build<VanillaCandyCaneIcon, SvgProperties>(VanillaCandyCaneIcon, "VanillaCandyCaneIcon")
export const CandyCane: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCandyCaneIcon>
> = CandyCaneIcon
    