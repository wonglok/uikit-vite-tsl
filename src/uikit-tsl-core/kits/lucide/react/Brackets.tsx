
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BracketsIcon as VanillaBracketsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BracketsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBracketsIcon>
> = /*@__PURE__*/ build<VanillaBracketsIcon, SvgProperties>(VanillaBracketsIcon)
export const Brackets: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBracketsIcon>
> = BracketsIcon
    