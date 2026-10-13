
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { OrbitIcon as VanillaOrbitIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const OrbitIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOrbitIcon>
> = /*@__PURE__*/ build<VanillaOrbitIcon, SvgProperties>(VanillaOrbitIcon)
export const Orbit: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOrbitIcon>
> = OrbitIcon
    