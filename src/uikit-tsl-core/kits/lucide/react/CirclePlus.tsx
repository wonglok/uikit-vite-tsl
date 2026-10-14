
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CirclePlusIcon as VanillaCirclePlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CirclePlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCirclePlusIcon>
> = /*@__PURE__*/ build<VanillaCirclePlusIcon, SvgProperties>(VanillaCirclePlusIcon, "VanillaCirclePlusIcon")
export const CirclePlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCirclePlusIcon>
> = CirclePlusIcon
    