
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Switch as VanillaSwitch, SwitchProperties as VanillaSwitchProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Switch as VanillaSwitch } from '../../core/index'

export type SwitchProperties = VanillaSwitchProperties & ClassListProperties

export const Switch: ForwardRefExoticComponent<
  PropsWithoutRef<SwitchProperties> & RefAttributes<VanillaSwitch>
> = /* @__PURE__ */ build<VanillaSwitch, SwitchProperties>(VanillaSwitch, "VanillaDefaultSwitch")
    
