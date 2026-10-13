
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MailQuestionIcon as VanillaMailQuestionIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MailQuestionIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailQuestionIcon>
> = /*@__PURE__*/ build<VanillaMailQuestionIcon, SvgProperties>(VanillaMailQuestionIcon)
export const MailQuestion: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailQuestionIcon>
> = MailQuestionIcon
    