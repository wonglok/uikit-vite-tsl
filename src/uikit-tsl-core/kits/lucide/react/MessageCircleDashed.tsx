
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageCircleDashedIcon as VanillaMessageCircleDashedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageCircleDashedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleDashedIcon>
> = /*@__PURE__*/ build<VanillaMessageCircleDashedIcon, SvgProperties>(VanillaMessageCircleDashedIcon)
export const MessageCircleDashed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleDashedIcon>
> = MessageCircleDashedIcon
    