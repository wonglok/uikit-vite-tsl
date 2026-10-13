
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageSquareHeartIcon as VanillaMessageSquareHeartIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageSquareHeartIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareHeartIcon>
> = /*@__PURE__*/ build<VanillaMessageSquareHeartIcon, SvgProperties>(VanillaMessageSquareHeartIcon)
export const MessageSquareHeart: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareHeartIcon>
> = MessageSquareHeartIcon
    