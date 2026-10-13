
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WebcamIcon as VanillaWebcamIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WebcamIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWebcamIcon>
> = /*@__PURE__*/ build<VanillaWebcamIcon, SvgProperties>(VanillaWebcamIcon)
export const Webcam: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWebcamIcon>
> = WebcamIcon
    