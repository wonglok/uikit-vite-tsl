
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TextCursorIcon as VanillaTextCursorIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TextCursorIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTextCursorIcon>
> = /*@__PURE__*/ build<VanillaTextCursorIcon, SvgProperties>(VanillaTextCursorIcon)
export const TextCursor: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTextCursorIcon>
> = TextCursorIcon
    