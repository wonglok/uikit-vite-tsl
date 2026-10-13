
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SwitchCameraIcon as VanillaSwitchCameraIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SwitchCameraIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSwitchCameraIcon>
> = /*@__PURE__*/ build<VanillaSwitchCameraIcon, SvgProperties>(VanillaSwitchCameraIcon)
export const SwitchCamera: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSwitchCameraIcon>
> = SwitchCameraIcon
    