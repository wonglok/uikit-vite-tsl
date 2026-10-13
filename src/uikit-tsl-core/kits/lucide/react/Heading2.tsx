
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Heading2Icon as VanillaHeading2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Heading2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeading2Icon>
> = /*@__PURE__*/ build<VanillaHeading2Icon, SvgProperties>(VanillaHeading2Icon)
export const Heading2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeading2Icon>
> = Heading2Icon
    