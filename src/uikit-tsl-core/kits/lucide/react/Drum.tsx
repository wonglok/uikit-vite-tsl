
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DrumIcon as VanillaDrumIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DrumIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDrumIcon>
> = /*@__PURE__*/ build<VanillaDrumIcon, SvgProperties>(VanillaDrumIcon)
export const Drum: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDrumIcon>
> = DrumIcon
    