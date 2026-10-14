
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageCircleMoreIcon as VanillaMessageCircleMoreIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageCircleMoreIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleMoreIcon>
> = /*@__PURE__*/ build<VanillaMessageCircleMoreIcon, SvgProperties>(VanillaMessageCircleMoreIcon, "VanillaMessageCircleMoreIcon")
export const MessageCircleMore: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleMoreIcon>
> = MessageCircleMoreIcon
    