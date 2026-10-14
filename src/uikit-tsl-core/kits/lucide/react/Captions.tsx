
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CaptionsIcon as VanillaCaptionsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CaptionsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCaptionsIcon>
> = /*@__PURE__*/ build<VanillaCaptionsIcon, SvgProperties>(VanillaCaptionsIcon, "VanillaCaptionsIcon")
export const Captions: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCaptionsIcon>
> = CaptionsIcon
    