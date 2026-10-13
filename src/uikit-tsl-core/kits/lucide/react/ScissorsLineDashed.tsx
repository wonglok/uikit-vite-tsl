
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScissorsLineDashedIcon as VanillaScissorsLineDashedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScissorsLineDashedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScissorsLineDashedIcon>
> = /*@__PURE__*/ build<VanillaScissorsLineDashedIcon, SvgProperties>(VanillaScissorsLineDashedIcon)
export const ScissorsLineDashed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScissorsLineDashedIcon>
> = ScissorsLineDashedIcon
    