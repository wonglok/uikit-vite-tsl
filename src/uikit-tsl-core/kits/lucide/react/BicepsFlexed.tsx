
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BicepsFlexedIcon as VanillaBicepsFlexedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BicepsFlexedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBicepsFlexedIcon>
> = /*@__PURE__*/ build<VanillaBicepsFlexedIcon, SvgProperties>(VanillaBicepsFlexedIcon)
export const BicepsFlexed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBicepsFlexedIcon>
> = BicepsFlexedIcon
    