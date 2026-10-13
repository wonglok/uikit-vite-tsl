
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookOpenCheckIcon as VanillaBookOpenCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookOpenCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookOpenCheckIcon>
> = /*@__PURE__*/ build<VanillaBookOpenCheckIcon, SvgProperties>(VanillaBookOpenCheckIcon)
export const BookOpenCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookOpenCheckIcon>
> = BookOpenCheckIcon
    