
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BringToFrontIcon as VanillaBringToFrontIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BringToFrontIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBringToFrontIcon>
> = /*@__PURE__*/ build<VanillaBringToFrontIcon, SvgProperties>(VanillaBringToFrontIcon, "VanillaBringToFrontIcon")
export const BringToFront: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBringToFrontIcon>
> = BringToFrontIcon
    