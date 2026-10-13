
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MousePointer2Icon as VanillaMousePointer2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MousePointer2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMousePointer2Icon>
> = /*@__PURE__*/ build<VanillaMousePointer2Icon, SvgProperties>(VanillaMousePointer2Icon)
export const MousePointer2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMousePointer2Icon>
> = MousePointer2Icon
    