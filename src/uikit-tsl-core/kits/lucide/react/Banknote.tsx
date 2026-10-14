
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BanknoteIcon as VanillaBanknoteIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BanknoteIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBanknoteIcon>
> = /*@__PURE__*/ build<VanillaBanknoteIcon, SvgProperties>(VanillaBanknoteIcon, "VanillaBanknoteIcon")
export const Banknote: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBanknoteIcon>
> = BanknoteIcon
    