
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SendIcon as VanillaSendIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SendIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSendIcon>
> = /*@__PURE__*/ build<VanillaSendIcon, SvgProperties>(VanillaSendIcon, "VanillaSendIcon")
export const Send: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSendIcon>
> = SendIcon
    