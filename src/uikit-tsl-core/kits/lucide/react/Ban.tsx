
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BanIcon as VanillaBanIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BanIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBanIcon>
> = /*@__PURE__*/ build<VanillaBanIcon, SvgProperties>(VanillaBanIcon)
export const Ban: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBanIcon>
> = BanIcon
    