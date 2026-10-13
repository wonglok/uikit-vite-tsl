
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RedoIcon as VanillaRedoIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RedoIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRedoIcon>
> = /*@__PURE__*/ build<VanillaRedoIcon, SvgProperties>(VanillaRedoIcon)
export const Redo: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRedoIcon>
> = RedoIcon
    