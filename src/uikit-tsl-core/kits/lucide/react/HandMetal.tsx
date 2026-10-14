
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HandMetalIcon as VanillaHandMetalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HandMetalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHandMetalIcon>
> = /*@__PURE__*/ build<VanillaHandMetalIcon, SvgProperties>(VanillaHandMetalIcon, "VanillaHandMetalIcon")
export const HandMetal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHandMetalIcon>
> = HandMetalIcon
    