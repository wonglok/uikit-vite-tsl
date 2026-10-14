
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CaseUpperIcon as VanillaCaseUpperIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CaseUpperIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCaseUpperIcon>
> = /*@__PURE__*/ build<VanillaCaseUpperIcon, SvgProperties>(VanillaCaseUpperIcon, "VanillaCaseUpperIcon")
export const CaseUpper: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCaseUpperIcon>
> = CaseUpperIcon
    