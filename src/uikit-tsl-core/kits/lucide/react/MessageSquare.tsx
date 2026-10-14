
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageSquareIcon as VanillaMessageSquareIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageSquareIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareIcon>
> = /*@__PURE__*/ build<VanillaMessageSquareIcon, SvgProperties>(VanillaMessageSquareIcon, "VanillaMessageSquareIcon")
export const MessageSquare: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareIcon>
> = MessageSquareIcon
    