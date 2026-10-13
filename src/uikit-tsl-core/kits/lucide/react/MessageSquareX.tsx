
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageSquareXIcon as VanillaMessageSquareXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageSquareXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareXIcon>
> = /*@__PURE__*/ build<VanillaMessageSquareXIcon, SvgProperties>(VanillaMessageSquareXIcon)
export const MessageSquareX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareXIcon>
> = MessageSquareXIcon
    