
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MailXIcon as VanillaMailXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MailXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailXIcon>
> = /*@__PURE__*/ build<VanillaMailXIcon, SvgProperties>(VanillaMailXIcon)
export const MailX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailXIcon>
> = MailXIcon
    