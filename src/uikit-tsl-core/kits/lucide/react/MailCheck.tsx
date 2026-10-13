
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MailCheckIcon as VanillaMailCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MailCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailCheckIcon>
> = /*@__PURE__*/ build<VanillaMailCheckIcon, SvgProperties>(VanillaMailCheckIcon)
export const MailCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailCheckIcon>
> = MailCheckIcon
    