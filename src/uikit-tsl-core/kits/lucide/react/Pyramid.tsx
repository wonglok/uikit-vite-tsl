
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PyramidIcon as VanillaPyramidIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PyramidIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPyramidIcon>
> = /*@__PURE__*/ build<VanillaPyramidIcon, SvgProperties>(VanillaPyramidIcon)
export const Pyramid: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPyramidIcon>
> = PyramidIcon
    