
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PlugZapIcon as VanillaPlugZapIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PlugZapIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPlugZapIcon>
> = /*@__PURE__*/ build<VanillaPlugZapIcon, SvgProperties>(VanillaPlugZapIcon, "VanillaPlugZapIcon")
export const PlugZap: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPlugZapIcon>
> = PlugZapIcon
    