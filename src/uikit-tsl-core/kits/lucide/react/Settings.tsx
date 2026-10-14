
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SettingsIcon as VanillaSettingsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SettingsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSettingsIcon>
> = /*@__PURE__*/ build<VanillaSettingsIcon, SvgProperties>(VanillaSettingsIcon, "VanillaSettingsIcon")
export const Settings: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSettingsIcon>
> = SettingsIcon
    