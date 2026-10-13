
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BluetoothIcon as VanillaBluetoothIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BluetoothIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBluetoothIcon>
> = /*@__PURE__*/ build<VanillaBluetoothIcon, SvgProperties>(VanillaBluetoothIcon)
export const Bluetooth: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBluetoothIcon>
> = BluetoothIcon
    