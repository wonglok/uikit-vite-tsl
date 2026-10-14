
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TextIcon as VanillaTextIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TextIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTextIcon>
> = /*@__PURE__*/ build<VanillaTextIcon, SvgProperties>(VanillaTextIcon, "VanillaTextIcon")
export const Text: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTextIcon>
> = TextIcon
    