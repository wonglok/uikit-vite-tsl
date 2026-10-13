
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquarePiIcon as VanillaSquarePiIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquarePiIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquarePiIcon>
> = /*@__PURE__*/ build<VanillaSquarePiIcon, SvgProperties>(VanillaSquarePiIcon)
export const SquarePi: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquarePiIcon>
> = SquarePiIcon
    