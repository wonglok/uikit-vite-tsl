
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ZapOffIcon as VanillaZapOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ZapOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaZapOffIcon>
> = /*@__PURE__*/ build<VanillaZapOffIcon, SvgProperties>(VanillaZapOffIcon)
export const ZapOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaZapOffIcon>
> = ZapOffIcon
    