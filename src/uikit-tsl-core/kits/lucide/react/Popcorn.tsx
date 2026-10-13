
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PopcornIcon as VanillaPopcornIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PopcornIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPopcornIcon>
> = /*@__PURE__*/ build<VanillaPopcornIcon, SvgProperties>(VanillaPopcornIcon)
export const Popcorn: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPopcornIcon>
> = PopcornIcon
    