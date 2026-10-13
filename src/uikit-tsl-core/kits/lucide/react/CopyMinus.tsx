
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CopyMinusIcon as VanillaCopyMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CopyMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCopyMinusIcon>
> = /*@__PURE__*/ build<VanillaCopyMinusIcon, SvgProperties>(VanillaCopyMinusIcon)
export const CopyMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCopyMinusIcon>
> = CopyMinusIcon
    