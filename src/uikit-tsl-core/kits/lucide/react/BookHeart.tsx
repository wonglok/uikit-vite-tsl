
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookHeartIcon as VanillaBookHeartIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookHeartIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookHeartIcon>
> = /*@__PURE__*/ build<VanillaBookHeartIcon, SvgProperties>(VanillaBookHeartIcon, "VanillaBookHeartIcon")
export const BookHeart: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookHeartIcon>
> = BookHeartIcon
    