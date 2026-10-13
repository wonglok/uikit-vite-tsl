
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MicIcon as VanillaMicIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MicIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMicIcon>
> = /*@__PURE__*/ build<VanillaMicIcon, SvgProperties>(VanillaMicIcon)
export const Mic: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMicIcon>
> = MicIcon
    