
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BandageIcon as VanillaBandageIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BandageIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBandageIcon>
> = /*@__PURE__*/ build<VanillaBandageIcon, SvgProperties>(VanillaBandageIcon)
export const Bandage: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBandageIcon>
> = BandageIcon
    