
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BananaIcon as VanillaBananaIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BananaIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBananaIcon>
> = /*@__PURE__*/ build<VanillaBananaIcon, SvgProperties>(VanillaBananaIcon)
export const Banana: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBananaIcon>
> = BananaIcon
    