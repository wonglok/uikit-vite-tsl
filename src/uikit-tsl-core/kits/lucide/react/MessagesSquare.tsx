
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessagesSquareIcon as VanillaMessagesSquareIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessagesSquareIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessagesSquareIcon>
> = /*@__PURE__*/ build<VanillaMessagesSquareIcon, SvgProperties>(VanillaMessagesSquareIcon)
export const MessagesSquare: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessagesSquareIcon>
> = MessagesSquareIcon
    