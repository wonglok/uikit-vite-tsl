
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { JapaneseYenIcon as VanillaJapaneseYenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const JapaneseYenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaJapaneseYenIcon>
> = /*@__PURE__*/ build<VanillaJapaneseYenIcon, SvgProperties>(VanillaJapaneseYenIcon)
export const JapaneseYen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaJapaneseYenIcon>
> = JapaneseYenIcon
    