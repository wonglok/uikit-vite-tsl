
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookImageIcon as VanillaBookImageIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookImageIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookImageIcon>
> = /*@__PURE__*/ build<VanillaBookImageIcon, SvgProperties>(VanillaBookImageIcon, "VanillaBookImageIcon")
export const BookImage: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookImageIcon>
> = BookImageIcon
    