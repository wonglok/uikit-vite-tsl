
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShieldQuestionIcon as VanillaShieldQuestionIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShieldQuestionIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldQuestionIcon>
> = /*@__PURE__*/ build<VanillaShieldQuestionIcon, SvgProperties>(VanillaShieldQuestionIcon)
export const ShieldQuestion: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldQuestionIcon>
> = ShieldQuestionIcon
    