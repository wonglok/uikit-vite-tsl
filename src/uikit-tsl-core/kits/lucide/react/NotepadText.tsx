
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { NotepadTextIcon as VanillaNotepadTextIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const NotepadTextIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNotepadTextIcon>
> = /*@__PURE__*/ build<VanillaNotepadTextIcon, SvgProperties>(VanillaNotepadTextIcon, "VanillaNotepadTextIcon")
export const NotepadText: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNotepadTextIcon>
> = NotepadTextIcon
    