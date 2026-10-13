
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageSquarePlusIcon as VanillaMessageSquarePlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageSquarePlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquarePlusIcon>
> = /*@__PURE__*/ build<VanillaMessageSquarePlusIcon, SvgProperties>(VanillaMessageSquarePlusIcon)
export const MessageSquarePlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquarePlusIcon>
> = MessageSquarePlusIcon
    