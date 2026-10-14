
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareSigmaIcon as VanillaSquareSigmaIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareSigmaIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareSigmaIcon>
> = /*@__PURE__*/ build<VanillaSquareSigmaIcon, SvgProperties>(VanillaSquareSigmaIcon, "VanillaSquareSigmaIcon")
export const SquareSigma: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareSigmaIcon>
> = SquareSigmaIcon
    