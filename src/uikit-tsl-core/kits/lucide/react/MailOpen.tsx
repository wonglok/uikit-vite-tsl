
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MailOpenIcon as VanillaMailOpenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MailOpenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailOpenIcon>
> = /*@__PURE__*/ build<VanillaMailOpenIcon, SvgProperties>(VanillaMailOpenIcon, "VanillaMailOpenIcon")
export const MailOpen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailOpenIcon>
> = MailOpenIcon
    