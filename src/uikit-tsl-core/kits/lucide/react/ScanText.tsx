
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScanTextIcon as VanillaScanTextIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScanTextIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanTextIcon>
> = /*@__PURE__*/ build<VanillaScanTextIcon, SvgProperties>(VanillaScanTextIcon)
export const ScanText: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanTextIcon>
> = ScanTextIcon
    