
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BrushCleaningIcon as VanillaBrushCleaningIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BrushCleaningIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBrushCleaningIcon>
> = /*@__PURE__*/ build<VanillaBrushCleaningIcon, SvgProperties>(VanillaBrushCleaningIcon, "VanillaBrushCleaningIcon")
export const BrushCleaning: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBrushCleaningIcon>
> = BrushCleaningIcon
    