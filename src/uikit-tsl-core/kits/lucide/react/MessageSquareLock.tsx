
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageSquareLockIcon as VanillaMessageSquareLockIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageSquareLockIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareLockIcon>
> = /*@__PURE__*/ build<VanillaMessageSquareLockIcon, SvgProperties>(VanillaMessageSquareLockIcon, "VanillaMessageSquareLockIcon")
export const MessageSquareLock: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareLockIcon>
> = MessageSquareLockIcon
    