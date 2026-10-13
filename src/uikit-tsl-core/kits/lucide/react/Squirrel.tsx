
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquirrelIcon as VanillaSquirrelIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquirrelIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquirrelIcon>
> = /*@__PURE__*/ build<VanillaSquirrelIcon, SvgProperties>(VanillaSquirrelIcon)
export const Squirrel: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquirrelIcon>
> = SquirrelIcon
    