
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScanIcon as VanillaScanIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScanIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanIcon>
> = /*@__PURE__*/ build<VanillaScanIcon, SvgProperties>(VanillaScanIcon)
export const Scan: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanIcon>
> = ScanIcon
    