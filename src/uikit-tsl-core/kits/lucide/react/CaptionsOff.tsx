
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CaptionsOffIcon as VanillaCaptionsOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CaptionsOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCaptionsOffIcon>
> = /*@__PURE__*/ build<VanillaCaptionsOffIcon, SvgProperties>(VanillaCaptionsOffIcon, "VanillaCaptionsOffIcon")
export const CaptionsOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCaptionsOffIcon>
> = CaptionsOffIcon
    