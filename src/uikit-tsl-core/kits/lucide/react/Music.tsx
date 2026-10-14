
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MusicIcon as VanillaMusicIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MusicIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMusicIcon>
> = /*@__PURE__*/ build<VanillaMusicIcon, SvgProperties>(VanillaMusicIcon, "VanillaMusicIcon")
export const Music: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMusicIcon>
> = MusicIcon
    