
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BluetoothConnectedIcon as VanillaBluetoothConnectedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BluetoothConnectedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBluetoothConnectedIcon>
> = /*@__PURE__*/ build<VanillaBluetoothConnectedIcon, SvgProperties>(VanillaBluetoothConnectedIcon)
export const BluetoothConnected: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBluetoothConnectedIcon>
> = BluetoothConnectedIcon
    