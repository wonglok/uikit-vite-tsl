
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RotateCwSquareIcon as VanillaRotateCwSquareIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RotateCwSquareIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRotateCwSquareIcon>
> = /*@__PURE__*/ build<VanillaRotateCwSquareIcon, SvgProperties>(VanillaRotateCwSquareIcon)
export const RotateCwSquare: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRotateCwSquareIcon>
> = RotateCwSquareIcon
    