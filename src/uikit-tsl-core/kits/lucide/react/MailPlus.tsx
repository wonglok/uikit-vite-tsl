
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MailPlusIcon as VanillaMailPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MailPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailPlusIcon>
> = /*@__PURE__*/ build<VanillaMailPlusIcon, SvgProperties>(VanillaMailPlusIcon)
export const MailPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailPlusIcon>
> = MailPlusIcon
    