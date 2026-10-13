
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { InboxIcon as VanillaInboxIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const InboxIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaInboxIcon>
> = /*@__PURE__*/ build<VanillaInboxIcon, SvgProperties>(VanillaInboxIcon)
export const Inbox: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaInboxIcon>
> = InboxIcon
    