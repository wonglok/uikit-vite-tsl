
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquircleIcon as VanillaSquircleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquircleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquircleIcon>
> = /*@__PURE__*/ build<VanillaSquircleIcon, SvgProperties>(VanillaSquircleIcon)
export const Squircle: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquircleIcon>
> = SquircleIcon
    