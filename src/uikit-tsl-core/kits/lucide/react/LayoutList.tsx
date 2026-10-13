
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LayoutListIcon as VanillaLayoutListIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LayoutListIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLayoutListIcon>
> = /*@__PURE__*/ build<VanillaLayoutListIcon, SvgProperties>(VanillaLayoutListIcon)
export const LayoutList: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLayoutListIcon>
> = LayoutListIcon
    