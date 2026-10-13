
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquaresIntersectIcon as VanillaSquaresIntersectIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquaresIntersectIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquaresIntersectIcon>
> = /*@__PURE__*/ build<VanillaSquaresIntersectIcon, SvgProperties>(VanillaSquaresIntersectIcon)
export const SquaresIntersect: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquaresIntersectIcon>
> = SquaresIntersectIcon
    