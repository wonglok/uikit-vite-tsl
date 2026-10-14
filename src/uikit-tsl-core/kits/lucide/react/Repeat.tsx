
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RepeatIcon as VanillaRepeatIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RepeatIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRepeatIcon>
> = /*@__PURE__*/ build<VanillaRepeatIcon, SvgProperties>(VanillaRepeatIcon, "VanillaRepeatIcon")
export const Repeat: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRepeatIcon>
> = RepeatIcon
    