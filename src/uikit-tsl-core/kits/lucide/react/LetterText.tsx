
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LetterTextIcon as VanillaLetterTextIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LetterTextIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLetterTextIcon>
> = /*@__PURE__*/ build<VanillaLetterTextIcon, SvgProperties>(VanillaLetterTextIcon, "VanillaLetterTextIcon")
export const LetterText: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLetterTextIcon>
> = LetterTextIcon
    