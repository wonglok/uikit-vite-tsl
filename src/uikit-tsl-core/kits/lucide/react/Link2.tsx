
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Link2Icon as VanillaLink2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Link2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLink2Icon>
> = /*@__PURE__*/ build<VanillaLink2Icon, SvgProperties>(VanillaLink2Icon)
export const Link2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLink2Icon>
> = Link2Icon
    