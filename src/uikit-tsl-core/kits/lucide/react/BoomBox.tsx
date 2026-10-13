
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BoomBoxIcon as VanillaBoomBoxIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BoomBoxIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBoomBoxIcon>
> = /*@__PURE__*/ build<VanillaBoomBoxIcon, SvgProperties>(VanillaBoomBoxIcon)
export const BoomBox: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBoomBoxIcon>
> = BoomBoxIcon
    