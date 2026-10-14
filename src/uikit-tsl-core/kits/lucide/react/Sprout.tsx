
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SproutIcon as VanillaSproutIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SproutIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSproutIcon>
> = /*@__PURE__*/ build<VanillaSproutIcon, SvgProperties>(VanillaSproutIcon, "VanillaSproutIcon")
export const Sprout: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSproutIcon>
> = SproutIcon
    