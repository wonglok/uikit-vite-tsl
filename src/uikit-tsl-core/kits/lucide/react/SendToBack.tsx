
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SendToBackIcon as VanillaSendToBackIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SendToBackIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSendToBackIcon>
> = /*@__PURE__*/ build<VanillaSendToBackIcon, SvgProperties>(VanillaSendToBackIcon)
export const SendToBack: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSendToBackIcon>
> = SendToBackIcon
    