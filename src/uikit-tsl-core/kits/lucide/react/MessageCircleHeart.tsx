
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageCircleHeartIcon as VanillaMessageCircleHeartIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageCircleHeartIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleHeartIcon>
> = /*@__PURE__*/ build<VanillaMessageCircleHeartIcon, SvgProperties>(VanillaMessageCircleHeartIcon, "VanillaMessageCircleHeartIcon")
export const MessageCircleHeart: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleHeartIcon>
> = MessageCircleHeartIcon
    