
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FlameIcon as VanillaFlameIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FlameIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlameIcon>
> = /*@__PURE__*/ build<VanillaFlameIcon, SvgProperties>(VanillaFlameIcon, "VanillaFlameIcon")
export const Flame: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlameIcon>
> = FlameIcon
    