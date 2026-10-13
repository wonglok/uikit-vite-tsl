
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BanknoteXIcon as VanillaBanknoteXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BanknoteXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBanknoteXIcon>
> = /*@__PURE__*/ build<VanillaBanknoteXIcon, SvgProperties>(VanillaBanknoteXIcon)
export const BanknoteX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBanknoteXIcon>
> = BanknoteXIcon
    