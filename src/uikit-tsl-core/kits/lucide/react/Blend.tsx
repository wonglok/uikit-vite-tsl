
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BlendIcon as VanillaBlendIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BlendIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBlendIcon>
> = /*@__PURE__*/ build<VanillaBlendIcon, SvgProperties>(VanillaBlendIcon)
export const Blend: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBlendIcon>
> = BlendIcon
    