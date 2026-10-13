
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BluetoothSearchingIcon as VanillaBluetoothSearchingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BluetoothSearchingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBluetoothSearchingIcon>
> = /*@__PURE__*/ build<VanillaBluetoothSearchingIcon, SvgProperties>(VanillaBluetoothSearchingIcon)
export const BluetoothSearching: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBluetoothSearchingIcon>
> = BluetoothSearchingIcon
    