
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PiggyBankIcon as VanillaPiggyBankIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PiggyBankIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPiggyBankIcon>
> = /*@__PURE__*/ build<VanillaPiggyBankIcon, SvgProperties>(VanillaPiggyBankIcon)
export const PiggyBank: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPiggyBankIcon>
> = PiggyBankIcon
    