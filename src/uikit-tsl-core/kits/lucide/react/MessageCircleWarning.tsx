
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageCircleWarningIcon as VanillaMessageCircleWarningIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageCircleWarningIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleWarningIcon>
> = /*@__PURE__*/ build<VanillaMessageCircleWarningIcon, SvgProperties>(VanillaMessageCircleWarningIcon, "VanillaMessageCircleWarningIcon")
export const MessageCircleWarning: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleWarningIcon>
> = MessageCircleWarningIcon
    