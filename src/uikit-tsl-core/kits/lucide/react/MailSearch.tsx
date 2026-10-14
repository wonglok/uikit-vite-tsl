
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MailSearchIcon as VanillaMailSearchIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MailSearchIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailSearchIcon>
> = /*@__PURE__*/ build<VanillaMailSearchIcon, SvgProperties>(VanillaMailSearchIcon, "VanillaMailSearchIcon")
export const MailSearch: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailSearchIcon>
> = MailSearchIcon
    