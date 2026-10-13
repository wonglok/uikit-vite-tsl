
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FigmaIcon as VanillaFigmaIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FigmaIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFigmaIcon>
> = /*@__PURE__*/ build<VanillaFigmaIcon, SvgProperties>(VanillaFigmaIcon)
export const Figma: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFigmaIcon>
> = FigmaIcon
    