
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WindArrowDownIcon as VanillaWindArrowDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WindArrowDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWindArrowDownIcon>
> = /*@__PURE__*/ build<VanillaWindArrowDownIcon, SvgProperties>(VanillaWindArrowDownIcon, "VanillaWindArrowDownIcon")
export const WindArrowDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWindArrowDownIcon>
> = WindArrowDownIcon
    