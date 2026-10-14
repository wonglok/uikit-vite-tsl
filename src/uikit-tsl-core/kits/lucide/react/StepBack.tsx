
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { StepBackIcon as VanillaStepBackIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const StepBackIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStepBackIcon>
> = /*@__PURE__*/ build<VanillaStepBackIcon, SvgProperties>(VanillaStepBackIcon, "VanillaStepBackIcon")
export const StepBack: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStepBackIcon>
> = StepBackIcon
    