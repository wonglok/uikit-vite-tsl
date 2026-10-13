
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChevronFirstIcon as VanillaChevronFirstIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChevronFirstIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronFirstIcon>
> = /*@__PURE__*/ build<VanillaChevronFirstIcon, SvgProperties>(VanillaChevronFirstIcon)
export const ChevronFirst: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronFirstIcon>
> = ChevronFirstIcon
    