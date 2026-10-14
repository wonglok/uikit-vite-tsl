
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ContactIcon as VanillaContactIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ContactIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaContactIcon>
> = /*@__PURE__*/ build<VanillaContactIcon, SvgProperties>(VanillaContactIcon, "VanillaContactIcon")
export const Contact: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaContactIcon>
> = ContactIcon
    