
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { IndentDecreaseIcon as VanillaIndentDecreaseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const IndentDecreaseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaIndentDecreaseIcon>
> = /*@__PURE__*/ build<VanillaIndentDecreaseIcon, SvgProperties>(VanillaIndentDecreaseIcon)
export const IndentDecrease: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaIndentDecreaseIcon>
> = IndentDecreaseIcon
    