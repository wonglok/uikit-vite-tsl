
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Textarea as VanillaTextarea, TextareaProperties as VanillaTextareaProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Textarea as VanillaTextarea } from '../../core/index'

export type TextareaProperties = VanillaTextareaProperties & ClassListProperties

export const Textarea: ForwardRefExoticComponent<
  PropsWithoutRef<TextareaProperties> & RefAttributes<VanillaTextarea>
> = /* @__PURE__ */ build<VanillaTextarea, TextareaProperties>(VanillaTextarea, "VanillaDefaultTextarea")
    
