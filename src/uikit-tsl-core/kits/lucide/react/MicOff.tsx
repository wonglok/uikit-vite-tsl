
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MicOffIcon as VanillaMicOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MicOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMicOffIcon>
> = /*@__PURE__*/ build<VanillaMicOffIcon, SvgProperties>(VanillaMicOffIcon)
export const MicOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMicOffIcon>
> = MicOffIcon
    