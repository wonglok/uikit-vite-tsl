
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ExternalLinkIcon as VanillaExternalLinkIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ExternalLinkIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaExternalLinkIcon>
> = /*@__PURE__*/ build<VanillaExternalLinkIcon, SvgProperties>(VanillaExternalLinkIcon, "VanillaExternalLinkIcon")
export const ExternalLink: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaExternalLinkIcon>
> = ExternalLinkIcon
    