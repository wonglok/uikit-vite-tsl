
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquarePlusIcon as VanillaSquarePlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquarePlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquarePlusIcon>
> = /*@__PURE__*/ build<VanillaSquarePlusIcon, SvgProperties>(VanillaSquarePlusIcon)
export const SquarePlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquarePlusIcon>
> = SquarePlusIcon
    