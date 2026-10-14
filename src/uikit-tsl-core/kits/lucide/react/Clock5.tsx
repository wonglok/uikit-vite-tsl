
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Clock5Icon as VanillaClock5Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Clock5Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock5Icon>
> = /*@__PURE__*/ build<VanillaClock5Icon, SvgProperties>(VanillaClock5Icon, "VanillaClock5Icon")
export const Clock5: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock5Icon>
> = Clock5Icon
    