
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookUserIcon as VanillaBookUserIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookUserIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookUserIcon>
> = /*@__PURE__*/ build<VanillaBookUserIcon, SvgProperties>(VanillaBookUserIcon, "VanillaBookUserIcon")
export const BookUser: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookUserIcon>
> = BookUserIcon
    