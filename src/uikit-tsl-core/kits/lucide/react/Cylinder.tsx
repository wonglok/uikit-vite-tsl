
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CylinderIcon as VanillaCylinderIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CylinderIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCylinderIcon>
> = /*@__PURE__*/ build<VanillaCylinderIcon, SvgProperties>(VanillaCylinderIcon)
export const Cylinder: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCylinderIcon>
> = CylinderIcon
    