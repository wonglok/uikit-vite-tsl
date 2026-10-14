
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TrainTrackIcon as VanillaTrainTrackIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TrainTrackIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrainTrackIcon>
> = /*@__PURE__*/ build<VanillaTrainTrackIcon, SvgProperties>(VanillaTrainTrackIcon, "VanillaTrainTrackIcon")
export const TrainTrack: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrainTrackIcon>
> = TrainTrackIcon
    