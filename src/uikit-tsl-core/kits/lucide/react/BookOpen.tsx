
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookOpenIcon as VanillaBookOpenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookOpenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookOpenIcon>
> = /*@__PURE__*/ build<VanillaBookOpenIcon, SvgProperties>(VanillaBookOpenIcon)
export const BookOpen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookOpenIcon>
> = BookOpenIcon
    