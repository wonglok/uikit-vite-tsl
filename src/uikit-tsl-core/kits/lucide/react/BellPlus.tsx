
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BellPlusIcon as VanillaBellPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BellPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBellPlusIcon>
> = /*@__PURE__*/ build<VanillaBellPlusIcon, SvgProperties>(VanillaBellPlusIcon)
export const BellPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBellPlusIcon>
> = BellPlusIcon
    