
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChromeIcon as VanillaChromeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChromeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChromeIcon>
> = /*@__PURE__*/ build<VanillaChromeIcon, SvgProperties>(VanillaChromeIcon)
export const Chrome: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChromeIcon>
> = ChromeIcon
    