
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Heading6Icon as VanillaHeading6Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Heading6Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeading6Icon>
> = /*@__PURE__*/ build<VanillaHeading6Icon, SvgProperties>(VanillaHeading6Icon, "VanillaHeading6Icon")
export const Heading6: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeading6Icon>
> = Heading6Icon
    