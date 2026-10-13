
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LassoSelectIcon as VanillaLassoSelectIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LassoSelectIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLassoSelectIcon>
> = /*@__PURE__*/ build<VanillaLassoSelectIcon, SvgProperties>(VanillaLassoSelectIcon)
export const LassoSelect: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLassoSelectIcon>
> = LassoSelectIcon
    