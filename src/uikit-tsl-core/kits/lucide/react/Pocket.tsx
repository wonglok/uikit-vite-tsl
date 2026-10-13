
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PocketIcon as VanillaPocketIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PocketIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPocketIcon>
> = /*@__PURE__*/ build<VanillaPocketIcon, SvgProperties>(VanillaPocketIcon)
export const Pocket: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPocketIcon>
> = PocketIcon
    