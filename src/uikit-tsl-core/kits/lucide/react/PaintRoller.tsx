
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PaintRollerIcon as VanillaPaintRollerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PaintRollerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPaintRollerIcon>
> = /*@__PURE__*/ build<VanillaPaintRollerIcon, SvgProperties>(VanillaPaintRollerIcon, "VanillaPaintRollerIcon")
export const PaintRoller: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPaintRollerIcon>
> = PaintRollerIcon
    