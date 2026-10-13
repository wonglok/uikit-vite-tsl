
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookUp2Icon as VanillaBookUp2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookUp2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookUp2Icon>
> = /*@__PURE__*/ build<VanillaBookUp2Icon, SvgProperties>(VanillaBookUp2Icon)
export const BookUp2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookUp2Icon>
> = BookUp2Icon
    