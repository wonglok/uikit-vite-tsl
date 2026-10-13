
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HousePlusIcon as VanillaHousePlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HousePlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHousePlusIcon>
> = /*@__PURE__*/ build<VanillaHousePlusIcon, SvgProperties>(VanillaHousePlusIcon)
export const HousePlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHousePlusIcon>
> = HousePlusIcon
    