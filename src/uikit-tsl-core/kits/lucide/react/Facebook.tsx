
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FacebookIcon as VanillaFacebookIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FacebookIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFacebookIcon>
> = /*@__PURE__*/ build<VanillaFacebookIcon, SvgProperties>(VanillaFacebookIcon)
export const Facebook: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFacebookIcon>
> = FacebookIcon
    