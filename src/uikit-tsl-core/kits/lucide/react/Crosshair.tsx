
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CrosshairIcon as VanillaCrosshairIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CrosshairIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCrosshairIcon>
> = /*@__PURE__*/ build<VanillaCrosshairIcon, SvgProperties>(VanillaCrosshairIcon)
export const Crosshair: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCrosshairIcon>
> = CrosshairIcon
    