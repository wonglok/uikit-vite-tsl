
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MartiniIcon as VanillaMartiniIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MartiniIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMartiniIcon>
> = /*@__PURE__*/ build<VanillaMartiniIcon, SvgProperties>(VanillaMartiniIcon)
export const Martini: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMartiniIcon>
> = MartiniIcon
    