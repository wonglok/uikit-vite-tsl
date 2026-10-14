
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BoltIcon as VanillaBoltIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BoltIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBoltIcon>
> = /*@__PURE__*/ build<VanillaBoltIcon, SvgProperties>(VanillaBoltIcon, "VanillaBoltIcon")
export const Bolt: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBoltIcon>
> = BoltIcon
    