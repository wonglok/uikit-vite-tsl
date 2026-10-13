
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageCircleCodeIcon as VanillaMessageCircleCodeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageCircleCodeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleCodeIcon>
> = /*@__PURE__*/ build<VanillaMessageCircleCodeIcon, SvgProperties>(VanillaMessageCircleCodeIcon)
export const MessageCircleCode: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleCodeIcon>
> = MessageCircleCodeIcon
    