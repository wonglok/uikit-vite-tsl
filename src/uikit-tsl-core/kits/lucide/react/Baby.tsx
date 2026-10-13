
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BabyIcon as VanillaBabyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BabyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBabyIcon>
> = /*@__PURE__*/ build<VanillaBabyIcon, SvgProperties>(VanillaBabyIcon)
export const Baby: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBabyIcon>
> = BabyIcon
    