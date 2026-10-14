
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DamIcon as VanillaDamIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DamIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDamIcon>
> = /*@__PURE__*/ build<VanillaDamIcon, SvgProperties>(VanillaDamIcon, "VanillaDamIcon")
export const Dam: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDamIcon>
> = DamIcon
    