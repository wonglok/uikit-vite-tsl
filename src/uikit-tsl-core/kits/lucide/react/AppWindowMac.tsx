
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AppWindowMacIcon as VanillaAppWindowMacIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AppWindowMacIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAppWindowMacIcon>
> = /*@__PURE__*/ build<VanillaAppWindowMacIcon, SvgProperties>(VanillaAppWindowMacIcon, "VanillaAppWindowMacIcon")
export const AppWindowMac: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAppWindowMacIcon>
> = AppWindowMacIcon
    