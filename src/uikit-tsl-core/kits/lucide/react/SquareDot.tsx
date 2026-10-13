
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareDotIcon as VanillaSquareDotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareDotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareDotIcon>
> = /*@__PURE__*/ build<VanillaSquareDotIcon, SvgProperties>(VanillaSquareDotIcon)
export const SquareDot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareDotIcon>
> = SquareDotIcon
    