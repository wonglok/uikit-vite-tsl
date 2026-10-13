
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BedIcon as VanillaBedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBedIcon>
> = /*@__PURE__*/ build<VanillaBedIcon, SvgProperties>(VanillaBedIcon)
export const Bed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBedIcon>
> = BedIcon
    