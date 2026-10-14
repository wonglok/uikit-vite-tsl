
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UndoIcon as VanillaUndoIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UndoIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUndoIcon>
> = /*@__PURE__*/ build<VanillaUndoIcon, SvgProperties>(VanillaUndoIcon, "VanillaUndoIcon")
export const Undo: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUndoIcon>
> = UndoIcon
    