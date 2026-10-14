
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { OmegaIcon as VanillaOmegaIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const OmegaIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOmegaIcon>
> = /*@__PURE__*/ build<VanillaOmegaIcon, SvgProperties>(VanillaOmegaIcon, "VanillaOmegaIcon")
export const Omega: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOmegaIcon>
> = OmegaIcon
    