
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UnplugIcon as VanillaUnplugIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UnplugIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUnplugIcon>
> = /*@__PURE__*/ build<VanillaUnplugIcon, SvgProperties>(VanillaUnplugIcon, "VanillaUnplugIcon")
export const Unplug: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUnplugIcon>
> = UnplugIcon
    