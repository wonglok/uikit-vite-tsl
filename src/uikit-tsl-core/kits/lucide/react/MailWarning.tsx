
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MailWarningIcon as VanillaMailWarningIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MailWarningIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailWarningIcon>
> = /*@__PURE__*/ build<VanillaMailWarningIcon, SvgProperties>(VanillaMailWarningIcon, "VanillaMailWarningIcon")
export const MailWarning: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailWarningIcon>
> = MailWarningIcon
    