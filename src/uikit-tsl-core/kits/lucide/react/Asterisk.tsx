
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AsteriskIcon as VanillaAsteriskIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AsteriskIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAsteriskIcon>
> = /*@__PURE__*/ build<VanillaAsteriskIcon, SvgProperties>(VanillaAsteriskIcon)
export const Asterisk: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAsteriskIcon>
> = AsteriskIcon
    