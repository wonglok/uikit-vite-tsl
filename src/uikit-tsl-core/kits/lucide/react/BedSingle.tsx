
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BedSingleIcon as VanillaBedSingleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BedSingleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBedSingleIcon>
> = /*@__PURE__*/ build<VanillaBedSingleIcon, SvgProperties>(VanillaBedSingleIcon, "VanillaBedSingleIcon")
export const BedSingle: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBedSingleIcon>
> = BedSingleIcon
    