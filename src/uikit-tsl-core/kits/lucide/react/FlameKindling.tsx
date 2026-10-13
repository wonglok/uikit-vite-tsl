
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FlameKindlingIcon as VanillaFlameKindlingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FlameKindlingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlameKindlingIcon>
> = /*@__PURE__*/ build<VanillaFlameKindlingIcon, SvgProperties>(VanillaFlameKindlingIcon)
export const FlameKindling: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlameKindlingIcon>
> = FlameKindlingIcon
    