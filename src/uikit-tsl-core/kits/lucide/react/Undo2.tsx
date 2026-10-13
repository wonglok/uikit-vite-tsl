
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Undo2Icon as VanillaUndo2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Undo2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUndo2Icon>
> = /*@__PURE__*/ build<VanillaUndo2Icon, SvgProperties>(VanillaUndo2Icon)
export const Undo2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUndo2Icon>
> = Undo2Icon
    