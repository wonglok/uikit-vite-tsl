
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageCirclePlusIcon as VanillaMessageCirclePlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageCirclePlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCirclePlusIcon>
> = /*@__PURE__*/ build<VanillaMessageCirclePlusIcon, SvgProperties>(VanillaMessageCirclePlusIcon)
export const MessageCirclePlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCirclePlusIcon>
> = MessageCirclePlusIcon
    