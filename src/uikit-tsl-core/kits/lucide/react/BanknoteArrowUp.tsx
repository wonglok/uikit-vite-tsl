
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BanknoteArrowUpIcon as VanillaBanknoteArrowUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BanknoteArrowUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBanknoteArrowUpIcon>
> = /*@__PURE__*/ build<VanillaBanknoteArrowUpIcon, SvgProperties>(VanillaBanknoteArrowUpIcon)
export const BanknoteArrowUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBanknoteArrowUpIcon>
> = BanknoteArrowUpIcon
    