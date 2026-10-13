
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { IconIndicator as VanillaIconIndicator, IconIndicatorProperties as VanillaIconIndicatorProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { IconIndicator as VanillaIconIndicator } from '../../core'

export type IconIndicatorProperties = VanillaIconIndicatorProperties & ClassListProperties

export const IconIndicator: ForwardRefExoticComponent<
  PropsWithoutRef<IconIndicatorProperties> & RefAttributes<VanillaIconIndicator>
> = /* @__PURE__ */ build<VanillaIconIndicator, IconIndicatorProperties>(VanillaIconIndicator, "VanillaHorizonIconIndicator")
    
