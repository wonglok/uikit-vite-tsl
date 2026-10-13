
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WashingMachineIcon as VanillaWashingMachineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WashingMachineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWashingMachineIcon>
> = /*@__PURE__*/ build<VanillaWashingMachineIcon, SvgProperties>(VanillaWashingMachineIcon)
export const WashingMachine: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWashingMachineIcon>
> = WashingMachineIcon
    