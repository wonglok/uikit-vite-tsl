
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListChecksIcon as VanillaListChecksIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListChecksIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListChecksIcon>
> = /*@__PURE__*/ build<VanillaListChecksIcon, SvgProperties>(VanillaListChecksIcon)
export const ListChecks: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListChecksIcon>
> = ListChecksIcon
    