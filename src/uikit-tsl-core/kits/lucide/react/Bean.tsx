
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BeanIcon as VanillaBeanIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BeanIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBeanIcon>
> = /*@__PURE__*/ build<VanillaBeanIcon, SvgProperties>(VanillaBeanIcon, "VanillaBeanIcon")
export const Bean: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBeanIcon>
> = BeanIcon
    