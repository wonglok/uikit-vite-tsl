
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageSquareShareIcon as VanillaMessageSquareShareIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageSquareShareIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareShareIcon>
> = /*@__PURE__*/ build<VanillaMessageSquareShareIcon, SvgProperties>(VanillaMessageSquareShareIcon, "VanillaMessageSquareShareIcon")
export const MessageSquareShare: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareShareIcon>
> = MessageSquareShareIcon
    