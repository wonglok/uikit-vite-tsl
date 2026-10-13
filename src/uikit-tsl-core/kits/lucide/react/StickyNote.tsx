
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { StickyNoteIcon as VanillaStickyNoteIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const StickyNoteIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStickyNoteIcon>
> = /*@__PURE__*/ build<VanillaStickyNoteIcon, SvgProperties>(VanillaStickyNoteIcon)
export const StickyNote: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStickyNoteIcon>
> = StickyNoteIcon
    