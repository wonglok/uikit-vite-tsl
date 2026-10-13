
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { StepForwardIcon as VanillaStepForwardIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const StepForwardIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStepForwardIcon>
> = /*@__PURE__*/ build<VanillaStepForwardIcon, SvgProperties>(VanillaStepForwardIcon)
export const StepForward: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStepForwardIcon>
> = StepForwardIcon
    