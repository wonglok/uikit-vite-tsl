
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HeartHandshakeIcon as VanillaHeartHandshakeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HeartHandshakeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeartHandshakeIcon>
> = /*@__PURE__*/ build<VanillaHeartHandshakeIcon, SvgProperties>(VanillaHeartHandshakeIcon, "VanillaHeartHandshakeIcon")
export const HeartHandshake: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeartHandshakeIcon>
> = HeartHandshakeIcon
    