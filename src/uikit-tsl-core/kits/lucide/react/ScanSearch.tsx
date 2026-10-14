
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScanSearchIcon as VanillaScanSearchIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScanSearchIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanSearchIcon>
> = /*@__PURE__*/ build<VanillaScanSearchIcon, SvgProperties>(VanillaScanSearchIcon, "VanillaScanSearchIcon")
export const ScanSearch: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanSearchIcon>
> = ScanSearchIcon
    