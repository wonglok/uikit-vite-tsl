
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ReplyIcon as VanillaReplyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ReplyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaReplyIcon>
> = /*@__PURE__*/ build<VanillaReplyIcon, SvgProperties>(VanillaReplyIcon, "VanillaReplyIcon")
export const Reply: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaReplyIcon>
> = ReplyIcon
    