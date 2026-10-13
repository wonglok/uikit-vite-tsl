
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ReplyAllIcon as VanillaReplyAllIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ReplyAllIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaReplyAllIcon>
> = /*@__PURE__*/ build<VanillaReplyAllIcon, SvgProperties>(VanillaReplyAllIcon)
export const ReplyAll: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaReplyAllIcon>
> = ReplyAllIcon
    