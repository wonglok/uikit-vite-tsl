
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { StickerIcon as VanillaStickerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const StickerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStickerIcon>
> = /*@__PURE__*/ build<VanillaStickerIcon, SvgProperties>(VanillaStickerIcon)
export const Sticker: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStickerIcon>
> = StickerIcon
    