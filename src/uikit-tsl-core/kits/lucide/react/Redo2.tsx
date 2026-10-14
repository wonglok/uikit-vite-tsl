
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Redo2Icon as VanillaRedo2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Redo2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRedo2Icon>
> = /*@__PURE__*/ build<VanillaRedo2Icon, SvgProperties>(VanillaRedo2Icon, "VanillaRedo2Icon")
export const Redo2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRedo2Icon>
> = Redo2Icon
    