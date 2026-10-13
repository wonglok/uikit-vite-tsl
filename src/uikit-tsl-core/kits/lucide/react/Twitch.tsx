
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TwitchIcon as VanillaTwitchIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TwitchIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTwitchIcon>
> = /*@__PURE__*/ build<VanillaTwitchIcon, SvgProperties>(VanillaTwitchIcon)
export const Twitch: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTwitchIcon>
> = TwitchIcon
    