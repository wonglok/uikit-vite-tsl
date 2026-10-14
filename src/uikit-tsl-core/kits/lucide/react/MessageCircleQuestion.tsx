
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageCircleQuestionIcon as VanillaMessageCircleQuestionIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageCircleQuestionIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleQuestionIcon>
> = /*@__PURE__*/ build<VanillaMessageCircleQuestionIcon, SvgProperties>(VanillaMessageCircleQuestionIcon, "VanillaMessageCircleQuestionIcon")
export const MessageCircleQuestion: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageCircleQuestionIcon>
> = MessageCircleQuestionIcon
    