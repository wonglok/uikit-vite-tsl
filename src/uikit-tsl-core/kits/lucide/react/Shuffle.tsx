
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShuffleIcon as VanillaShuffleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShuffleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShuffleIcon>
> = /*@__PURE__*/ build<VanillaShuffleIcon, SvgProperties>(VanillaShuffleIcon, "VanillaShuffleIcon")
export const Shuffle: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShuffleIcon>
> = ShuffleIcon
    