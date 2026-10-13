
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RadioTowerIcon as VanillaRadioTowerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RadioTowerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRadioTowerIcon>
> = /*@__PURE__*/ build<VanillaRadioTowerIcon, SvgProperties>(VanillaRadioTowerIcon)
export const RadioTower: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRadioTowerIcon>
> = RadioTowerIcon
    