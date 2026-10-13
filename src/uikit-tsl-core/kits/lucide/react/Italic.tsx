
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ItalicIcon as VanillaItalicIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ItalicIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaItalicIcon>
> = /*@__PURE__*/ build<VanillaItalicIcon, SvgProperties>(VanillaItalicIcon)
export const Italic: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaItalicIcon>
> = ItalicIcon
    