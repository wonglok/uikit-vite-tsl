
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BlocksIcon as VanillaBlocksIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BlocksIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBlocksIcon>
> = /*@__PURE__*/ build<VanillaBlocksIcon, SvgProperties>(VanillaBlocksIcon)
export const Blocks: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBlocksIcon>
> = BlocksIcon
    