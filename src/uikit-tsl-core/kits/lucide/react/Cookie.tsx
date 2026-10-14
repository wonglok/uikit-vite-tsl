
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CookieIcon as VanillaCookieIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CookieIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCookieIcon>
> = /*@__PURE__*/ build<VanillaCookieIcon, SvgProperties>(VanillaCookieIcon, "VanillaCookieIcon")
export const Cookie: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCookieIcon>
> = CookieIcon
    