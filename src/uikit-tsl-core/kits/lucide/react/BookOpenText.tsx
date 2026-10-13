
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookOpenTextIcon as VanillaBookOpenTextIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookOpenTextIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookOpenTextIcon>
> = /*@__PURE__*/ build<VanillaBookOpenTextIcon, SvgProperties>(VanillaBookOpenTextIcon)
export const BookOpenText: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookOpenTextIcon>
> = BookOpenTextIcon
    