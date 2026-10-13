
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageSquareCodeIcon as VanillaMessageSquareCodeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageSquareCodeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareCodeIcon>
> = /*@__PURE__*/ build<VanillaMessageSquareCodeIcon, SvgProperties>(VanillaMessageSquareCodeIcon)
export const MessageSquareCode: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareCodeIcon>
> = MessageSquareCodeIcon
    