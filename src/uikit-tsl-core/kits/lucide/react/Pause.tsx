
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PauseIcon as VanillaPauseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PauseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPauseIcon>
> = /*@__PURE__*/ build<VanillaPauseIcon, SvgProperties>(VanillaPauseIcon, "VanillaPauseIcon")
export const Pause: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPauseIcon>
> = PauseIcon
    