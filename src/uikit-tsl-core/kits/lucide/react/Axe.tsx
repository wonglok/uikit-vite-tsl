
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AxeIcon as VanillaAxeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AxeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAxeIcon>
> = /*@__PURE__*/ build<VanillaAxeIcon, SvgProperties>(VanillaAxeIcon)
export const Axe: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAxeIcon>
> = AxeIcon
    