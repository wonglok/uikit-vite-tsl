
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CitrusIcon as VanillaCitrusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CitrusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCitrusIcon>
> = /*@__PURE__*/ build<VanillaCitrusIcon, SvgProperties>(VanillaCitrusIcon, "VanillaCitrusIcon")
export const Citrus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCitrusIcon>
> = CitrusIcon
    