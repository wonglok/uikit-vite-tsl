
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ZapIcon as VanillaZapIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ZapIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaZapIcon>
> = /*@__PURE__*/ build<VanillaZapIcon, SvgProperties>(VanillaZapIcon, "VanillaZapIcon")
export const Zap: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaZapIcon>
> = ZapIcon
    