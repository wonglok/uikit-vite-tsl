
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScanLineIcon as VanillaScanLineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScanLineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanLineIcon>
> = /*@__PURE__*/ build<VanillaScanLineIcon, SvgProperties>(VanillaScanLineIcon)
export const ScanLine: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanLineIcon>
> = ScanLineIcon
    