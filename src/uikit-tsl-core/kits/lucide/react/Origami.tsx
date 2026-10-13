
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { OrigamiIcon as VanillaOrigamiIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const OrigamiIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOrigamiIcon>
> = /*@__PURE__*/ build<VanillaOrigamiIcon, SvgProperties>(VanillaOrigamiIcon)
export const Origami: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOrigamiIcon>
> = OrigamiIcon
    