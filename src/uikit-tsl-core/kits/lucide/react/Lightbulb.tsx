
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LightbulbIcon as VanillaLightbulbIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LightbulbIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLightbulbIcon>
> = /*@__PURE__*/ build<VanillaLightbulbIcon, SvgProperties>(VanillaLightbulbIcon, "VanillaLightbulbIcon")
export const Lightbulb: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLightbulbIcon>
> = LightbulbIcon
    