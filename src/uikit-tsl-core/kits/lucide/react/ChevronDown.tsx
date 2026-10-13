
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChevronDownIcon as VanillaChevronDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChevronDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronDownIcon>
> = /*@__PURE__*/ build<VanillaChevronDownIcon, SvgProperties>(VanillaChevronDownIcon)
export const ChevronDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronDownIcon>
> = ChevronDownIcon
    