
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BedDoubleIcon as VanillaBedDoubleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BedDoubleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBedDoubleIcon>
> = /*@__PURE__*/ build<VanillaBedDoubleIcon, SvgProperties>(VanillaBedDoubleIcon, "VanillaBedDoubleIcon")
export const BedDouble: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBedDoubleIcon>
> = BedDoubleIcon
    