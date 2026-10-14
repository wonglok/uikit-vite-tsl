
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Heading3Icon as VanillaHeading3Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Heading3Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeading3Icon>
> = /*@__PURE__*/ build<VanillaHeading3Icon, SvgProperties>(VanillaHeading3Icon, "VanillaHeading3Icon")
export const Heading3: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeading3Icon>
> = Heading3Icon
    