
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TextSelectIcon as VanillaTextSelectIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TextSelectIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTextSelectIcon>
> = /*@__PURE__*/ build<VanillaTextSelectIcon, SvgProperties>(VanillaTextSelectIcon)
export const TextSelect: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTextSelectIcon>
> = TextSelectIcon
    