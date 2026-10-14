
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PcCaseIcon as VanillaPcCaseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PcCaseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPcCaseIcon>
> = /*@__PURE__*/ build<VanillaPcCaseIcon, SvgProperties>(VanillaPcCaseIcon, "VanillaPcCaseIcon")
export const PcCase: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPcCaseIcon>
> = PcCaseIcon
    