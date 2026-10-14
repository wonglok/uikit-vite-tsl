
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PipetteIcon as VanillaPipetteIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PipetteIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPipetteIcon>
> = /*@__PURE__*/ build<VanillaPipetteIcon, SvgProperties>(VanillaPipetteIcon, "VanillaPipetteIcon")
export const Pipette: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPipetteIcon>
> = PipetteIcon
    