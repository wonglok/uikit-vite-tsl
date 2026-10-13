
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FocusIcon as VanillaFocusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FocusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFocusIcon>
> = /*@__PURE__*/ build<VanillaFocusIcon, SvgProperties>(VanillaFocusIcon)
export const Focus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFocusIcon>
> = FocusIcon
    