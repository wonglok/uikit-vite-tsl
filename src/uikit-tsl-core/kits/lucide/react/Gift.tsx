
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GiftIcon as VanillaGiftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GiftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGiftIcon>
> = /*@__PURE__*/ build<VanillaGiftIcon, SvgProperties>(VanillaGiftIcon)
export const Gift: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGiftIcon>
> = GiftIcon
    