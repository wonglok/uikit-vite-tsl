
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LightbulbOffIcon as VanillaLightbulbOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LightbulbOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLightbulbOffIcon>
> = /*@__PURE__*/ build<VanillaLightbulbOffIcon, SvgProperties>(VanillaLightbulbOffIcon, "VanillaLightbulbOffIcon")
export const LightbulbOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLightbulbOffIcon>
> = LightbulbOffIcon
    