
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MailIcon as VanillaMailIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MailIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailIcon>
> = /*@__PURE__*/ build<VanillaMailIcon, SvgProperties>(VanillaMailIcon, "VanillaMailIcon")
export const Mail: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailIcon>
> = MailIcon
    