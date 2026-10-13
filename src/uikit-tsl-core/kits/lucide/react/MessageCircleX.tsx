
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageCircleXIcon as VanillaMessageCircleXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageCircleXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleXIcon>
> = /*@__PURE__*/ build<VanillaMessageCircleXIcon, SvgProperties>(VanillaMessageCircleXIcon)
export const MessageCircleX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleXIcon>
> = MessageCircleXIcon
    