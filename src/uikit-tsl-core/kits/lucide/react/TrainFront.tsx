
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TrainFrontIcon as VanillaTrainFrontIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TrainFrontIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrainFrontIcon>
> = /*@__PURE__*/ build<VanillaTrainFrontIcon, SvgProperties>(VanillaTrainFrontIcon, "VanillaTrainFrontIcon")
export const TrainFront: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrainFrontIcon>
> = TrainFrontIcon
    