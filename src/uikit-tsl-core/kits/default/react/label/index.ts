
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Label as VanillaLabel, LabelProperties as VanillaLabelProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Label as VanillaLabel } from '../../core/index'

export type LabelProperties = VanillaLabelProperties & { children?: ReactNode } & ClassListProperties

export const Label: ForwardRefExoticComponent<
  PropsWithoutRef<LabelProperties> & RefAttributes<VanillaLabel>
> = /* @__PURE__ */ build<VanillaLabel, LabelProperties>(VanillaLabel, "VanillaDefaultLabel")
    
