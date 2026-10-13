
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleHelpIcon as VanillaCircleHelpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleHelpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleHelpIcon>
> = /*@__PURE__*/ build<VanillaCircleHelpIcon, SvgProperties>(VanillaCircleHelpIcon)
export const CircleHelp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleHelpIcon>
> = CircleHelpIcon
    