
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Panel as VanillaPanel, PanelProperties as VanillaPanelProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { Panel as VanillaPanel } from '../../core'

export type PanelProperties = VanillaPanelProperties & { children?: ReactNode } & ClassListProperties

export const Panel: ForwardRefExoticComponent<
  PropsWithoutRef<PanelProperties> & RefAttributes<VanillaPanel>
> = /* @__PURE__ */ build<VanillaPanel, PanelProperties>(VanillaPanel, "VanillaHorizonPanel")
    
