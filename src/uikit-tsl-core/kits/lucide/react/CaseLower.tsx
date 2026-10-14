
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CaseLowerIcon as VanillaCaseLowerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CaseLowerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCaseLowerIcon>
> = /*@__PURE__*/ build<VanillaCaseLowerIcon, SvgProperties>(VanillaCaseLowerIcon, "VanillaCaseLowerIcon")
export const CaseLower: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCaseLowerIcon>
> = CaseLowerIcon
    