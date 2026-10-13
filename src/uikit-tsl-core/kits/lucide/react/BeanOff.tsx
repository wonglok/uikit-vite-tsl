
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BeanOffIcon as VanillaBeanOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BeanOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBeanOffIcon>
> = /*@__PURE__*/ build<VanillaBeanOffIcon, SvgProperties>(VanillaBeanOffIcon)
export const BeanOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBeanOffIcon>
> = BeanOffIcon
    