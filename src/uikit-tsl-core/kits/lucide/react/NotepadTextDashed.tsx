
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { NotepadTextDashedIcon as VanillaNotepadTextDashedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const NotepadTextDashedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNotepadTextDashedIcon>
> = /*@__PURE__*/ build<VanillaNotepadTextDashedIcon, SvgProperties>(VanillaNotepadTextDashedIcon)
export const NotepadTextDashed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNotepadTextDashedIcon>
> = NotepadTextDashedIcon
    