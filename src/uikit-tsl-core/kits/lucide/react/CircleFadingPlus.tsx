
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleFadingPlusIcon as VanillaCircleFadingPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleFadingPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleFadingPlusIcon>
> = /*@__PURE__*/ build<VanillaCircleFadingPlusIcon, SvgProperties>(VanillaCircleFadingPlusIcon)
export const CircleFadingPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleFadingPlusIcon>
> = CircleFadingPlusIcon
    