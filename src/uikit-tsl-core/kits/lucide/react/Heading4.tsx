
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Heading4Icon as VanillaHeading4Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Heading4Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeading4Icon>
> = /*@__PURE__*/ build<VanillaHeading4Icon, SvgProperties>(VanillaHeading4Icon)
export const Heading4: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeading4Icon>
> = Heading4Icon
    