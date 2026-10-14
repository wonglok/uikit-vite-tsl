
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageSquareOffIcon as VanillaMessageSquareOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageSquareOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareOffIcon>
> = /*@__PURE__*/ build<VanillaMessageSquareOffIcon, SvgProperties>(VanillaMessageSquareOffIcon, "VanillaMessageSquareOffIcon")
export const MessageSquareOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareOffIcon>
> = MessageSquareOffIcon
    