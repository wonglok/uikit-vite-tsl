
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageCircleIcon as VanillaMessageCircleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageCircleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleIcon>
> = /*@__PURE__*/ build<VanillaMessageCircleIcon, SvgProperties>(VanillaMessageCircleIcon)
export const MessageCircle: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleIcon>
> = MessageCircleIcon
    