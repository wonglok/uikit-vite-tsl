
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BirdIcon as VanillaBirdIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BirdIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBirdIcon>
> = /*@__PURE__*/ build<VanillaBirdIcon, SvgProperties>(VanillaBirdIcon)
export const Bird: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBirdIcon>
> = BirdIcon
    