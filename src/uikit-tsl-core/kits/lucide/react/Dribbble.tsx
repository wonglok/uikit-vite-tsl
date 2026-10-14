
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DribbbleIcon as VanillaDribbbleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DribbbleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDribbbleIcon>
> = /*@__PURE__*/ build<VanillaDribbbleIcon, SvgProperties>(VanillaDribbbleIcon, "VanillaDribbbleIcon")
export const Dribbble: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDribbbleIcon>
> = DribbbleIcon
    