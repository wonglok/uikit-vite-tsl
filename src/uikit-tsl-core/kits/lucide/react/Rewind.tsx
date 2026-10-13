
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RewindIcon as VanillaRewindIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RewindIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRewindIcon>
> = /*@__PURE__*/ build<VanillaRewindIcon, SvgProperties>(VanillaRewindIcon)
export const Rewind: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRewindIcon>
> = RewindIcon
    