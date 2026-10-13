
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BowArrowIcon as VanillaBowArrowIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BowArrowIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBowArrowIcon>
> = /*@__PURE__*/ build<VanillaBowArrowIcon, SvgProperties>(VanillaBowArrowIcon)
export const BowArrow: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBowArrowIcon>
> = BowArrowIcon
    