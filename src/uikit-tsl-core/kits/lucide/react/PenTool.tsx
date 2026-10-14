
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PenToolIcon as VanillaPenToolIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PenToolIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPenToolIcon>
> = /*@__PURE__*/ build<VanillaPenToolIcon, SvgProperties>(VanillaPenToolIcon, "VanillaPenToolIcon")
export const PenTool: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPenToolIcon>
> = PenToolIcon
    