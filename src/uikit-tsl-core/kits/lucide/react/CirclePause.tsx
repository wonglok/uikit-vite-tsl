
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CirclePauseIcon as VanillaCirclePauseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CirclePauseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCirclePauseIcon>
> = /*@__PURE__*/ build<VanillaCirclePauseIcon, SvgProperties>(VanillaCirclePauseIcon, "VanillaCirclePauseIcon")
export const CirclePause: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCirclePauseIcon>
> = CirclePauseIcon
    