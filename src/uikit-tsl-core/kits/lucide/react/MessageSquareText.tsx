
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageSquareTextIcon as VanillaMessageSquareTextIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageSquareTextIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareTextIcon>
> = /*@__PURE__*/ build<VanillaMessageSquareTextIcon, SvgProperties>(VanillaMessageSquareTextIcon)
export const MessageSquareText: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareTextIcon>
> = MessageSquareTextIcon
    