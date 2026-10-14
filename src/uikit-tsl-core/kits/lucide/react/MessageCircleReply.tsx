
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageCircleReplyIcon as VanillaMessageCircleReplyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageCircleReplyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleReplyIcon>
> = /*@__PURE__*/ build<VanillaMessageCircleReplyIcon, SvgProperties>(VanillaMessageCircleReplyIcon, "VanillaMessageCircleReplyIcon")
export const MessageCircleReply: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleReplyIcon>
> = MessageCircleReplyIcon
    