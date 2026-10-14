
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GhostIcon as VanillaGhostIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GhostIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGhostIcon>
> = /*@__PURE__*/ build<VanillaGhostIcon, SvgProperties>(VanillaGhostIcon, "VanillaGhostIcon")
export const Ghost: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGhostIcon>
> = GhostIcon
    