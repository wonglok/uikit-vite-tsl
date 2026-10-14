
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MailMinusIcon as VanillaMailMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MailMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailMinusIcon>
> = /*@__PURE__*/ build<VanillaMailMinusIcon, SvgProperties>(VanillaMailMinusIcon, "VanillaMailMinusIcon")
export const MailMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailMinusIcon>
> = MailMinusIcon
    