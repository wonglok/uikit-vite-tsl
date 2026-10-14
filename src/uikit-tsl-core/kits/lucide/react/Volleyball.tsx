
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VolleyballIcon as VanillaVolleyballIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VolleyballIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVolleyballIcon>
> = /*@__PURE__*/ build<VanillaVolleyballIcon, SvgProperties>(VanillaVolleyballIcon, "VanillaVolleyballIcon")
export const Volleyball: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVolleyballIcon>
> = VolleyballIcon
    