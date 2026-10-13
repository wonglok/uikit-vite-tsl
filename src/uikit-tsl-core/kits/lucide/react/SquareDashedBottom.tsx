
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareDashedBottomIcon as VanillaSquareDashedBottomIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareDashedBottomIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareDashedBottomIcon>
> = /*@__PURE__*/ build<VanillaSquareDashedBottomIcon, SvgProperties>(VanillaSquareDashedBottomIcon)
export const SquareDashedBottom: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareDashedBottomIcon>
> = SquareDashedBottomIcon
    