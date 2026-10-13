
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Heading1Icon as VanillaHeading1Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Heading1Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeading1Icon>
> = /*@__PURE__*/ build<VanillaHeading1Icon, SvgProperties>(VanillaHeading1Icon)
export const Heading1: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeading1Icon>
> = Heading1Icon
    