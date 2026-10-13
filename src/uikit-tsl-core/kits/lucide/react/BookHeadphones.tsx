
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookHeadphonesIcon as VanillaBookHeadphonesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookHeadphonesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookHeadphonesIcon>
> = /*@__PURE__*/ build<VanillaBookHeadphonesIcon, SvgProperties>(VanillaBookHeadphonesIcon)
export const BookHeadphones: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookHeadphonesIcon>
> = BookHeadphonesIcon
    