
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MedalIcon as VanillaMedalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MedalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMedalIcon>
> = /*@__PURE__*/ build<VanillaMedalIcon, SvgProperties>(VanillaMedalIcon, "VanillaMedalIcon")
export const Medal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMedalIcon>
> = MedalIcon
    