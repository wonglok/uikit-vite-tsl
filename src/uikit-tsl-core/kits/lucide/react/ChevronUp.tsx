
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChevronUpIcon as VanillaChevronUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChevronUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronUpIcon>
> = /*@__PURE__*/ build<VanillaChevronUpIcon, SvgProperties>(VanillaChevronUpIcon, "VanillaChevronUpIcon")
export const ChevronUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronUpIcon>
> = ChevronUpIcon
    