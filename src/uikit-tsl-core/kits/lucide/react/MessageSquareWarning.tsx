
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageSquareWarningIcon as VanillaMessageSquareWarningIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageSquareWarningIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareWarningIcon>
> = /*@__PURE__*/ build<VanillaMessageSquareWarningIcon, SvgProperties>(VanillaMessageSquareWarningIcon)
export const MessageSquareWarning: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareWarningIcon>
> = MessageSquareWarningIcon
    