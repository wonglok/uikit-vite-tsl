
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BrushIcon as VanillaBrushIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BrushIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBrushIcon>
> = /*@__PURE__*/ build<VanillaBrushIcon, SvgProperties>(VanillaBrushIcon)
export const Brush: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBrushIcon>
> = BrushIcon
    