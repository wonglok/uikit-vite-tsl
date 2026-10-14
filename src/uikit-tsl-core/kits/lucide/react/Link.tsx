
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LinkIcon as VanillaLinkIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LinkIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLinkIcon>
> = /*@__PURE__*/ build<VanillaLinkIcon, SvgProperties>(VanillaLinkIcon, "VanillaLinkIcon")
export const Link: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLinkIcon>
> = LinkIcon
    