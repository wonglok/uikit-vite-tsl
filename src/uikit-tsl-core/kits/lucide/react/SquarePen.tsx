
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquarePenIcon as VanillaSquarePenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquarePenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquarePenIcon>
> = /*@__PURE__*/ build<VanillaSquarePenIcon, SvgProperties>(VanillaSquarePenIcon, "VanillaSquarePenIcon")
export const SquarePen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquarePenIcon>
> = SquarePenIcon
    