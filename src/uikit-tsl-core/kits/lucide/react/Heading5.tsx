
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Heading5Icon as VanillaHeading5Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Heading5Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeading5Icon>
> = /*@__PURE__*/ build<VanillaHeading5Icon, SvgProperties>(VanillaHeading5Icon, "VanillaHeading5Icon")
export const Heading5: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeading5Icon>
> = Heading5Icon
    