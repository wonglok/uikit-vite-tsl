
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Slider as VanillaSlider, SliderProperties as VanillaSliderProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { Slider as VanillaSlider } from '../../core'

export type SliderProperties = VanillaSliderProperties & ClassListProperties

export const Slider: ForwardRefExoticComponent<
  PropsWithoutRef<SliderProperties> & RefAttributes<VanillaSlider>
> = /* @__PURE__ */ build<VanillaSlider, SliderProperties>(VanillaSlider, "VanillaHorizonSlider")
    
