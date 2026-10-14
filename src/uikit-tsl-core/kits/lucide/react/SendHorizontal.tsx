
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SendHorizontalIcon as VanillaSendHorizontalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SendHorizontalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSendHorizontalIcon>
> = /*@__PURE__*/ build<VanillaSendHorizontalIcon, SvgProperties>(VanillaSendHorizontalIcon, "VanillaSendHorizontalIcon")
export const SendHorizontal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSendHorizontalIcon>
> = SendHorizontalIcon
    