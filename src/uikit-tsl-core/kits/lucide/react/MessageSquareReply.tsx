
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageSquareReplyIcon as VanillaMessageSquareReplyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageSquareReplyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareReplyIcon>
> = /*@__PURE__*/ build<VanillaMessageSquareReplyIcon, SvgProperties>(VanillaMessageSquareReplyIcon)
export const MessageSquareReply: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareReplyIcon>
> = MessageSquareReplyIcon
    