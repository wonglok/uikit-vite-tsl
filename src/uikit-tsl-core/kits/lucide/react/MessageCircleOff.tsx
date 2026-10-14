
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageCircleOffIcon as VanillaMessageCircleOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageCircleOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleOffIcon>
> = /*@__PURE__*/ build<VanillaMessageCircleOffIcon, SvgProperties>(VanillaMessageCircleOffIcon, "VanillaMessageCircleOffIcon")
export const MessageCircleOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleOffIcon>
> = MessageCircleOffIcon
    