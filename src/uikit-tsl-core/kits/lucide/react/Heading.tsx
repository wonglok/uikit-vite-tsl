
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HeadingIcon as VanillaHeadingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HeadingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeadingIcon>
> = /*@__PURE__*/ build<VanillaHeadingIcon, SvgProperties>(VanillaHeadingIcon)
export const Heading: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeadingIcon>
> = HeadingIcon
    