
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AngryIcon as VanillaAngryIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AngryIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAngryIcon>
> = /*@__PURE__*/ build<VanillaAngryIcon, SvgProperties>(VanillaAngryIcon)
export const Angry: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAngryIcon>
> = AngryIcon
    