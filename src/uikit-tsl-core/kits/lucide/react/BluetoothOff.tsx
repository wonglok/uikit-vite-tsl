
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BluetoothOffIcon as VanillaBluetoothOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BluetoothOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBluetoothOffIcon>
> = /*@__PURE__*/ build<VanillaBluetoothOffIcon, SvgProperties>(VanillaBluetoothOffIcon, "VanillaBluetoothOffIcon")
export const BluetoothOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBluetoothOffIcon>
> = BluetoothOffIcon
    