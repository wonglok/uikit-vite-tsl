
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SkullIcon as VanillaSkullIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SkullIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSkullIcon>
> = /*@__PURE__*/ build<VanillaSkullIcon, SvgProperties>(VanillaSkullIcon)
export const Skull: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSkullIcon>
> = SkullIcon
    