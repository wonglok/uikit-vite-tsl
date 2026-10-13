
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BitcoinIcon as VanillaBitcoinIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BitcoinIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBitcoinIcon>
> = /*@__PURE__*/ build<VanillaBitcoinIcon, SvgProperties>(VanillaBitcoinIcon)
export const Bitcoin: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBitcoinIcon>
> = BitcoinIcon
    