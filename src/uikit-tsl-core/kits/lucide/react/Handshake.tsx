
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HandshakeIcon as VanillaHandshakeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HandshakeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHandshakeIcon>
> = /*@__PURE__*/ build<VanillaHandshakeIcon, SvgProperties>(VanillaHandshakeIcon)
export const Handshake: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHandshakeIcon>
> = HandshakeIcon
    