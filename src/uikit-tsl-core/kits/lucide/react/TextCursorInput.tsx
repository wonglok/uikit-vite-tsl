
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TextCursorInputIcon as VanillaTextCursorInputIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TextCursorInputIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTextCursorInputIcon>
> = /*@__PURE__*/ build<VanillaTextCursorInputIcon, SvgProperties>(VanillaTextCursorInputIcon, "VanillaTextCursorInputIcon")
export const TextCursorInput: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTextCursorInputIcon>
> = TextCursorInputIcon
    