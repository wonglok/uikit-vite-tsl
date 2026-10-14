
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PencilRulerIcon as VanillaPencilRulerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PencilRulerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPencilRulerIcon>
> = /*@__PURE__*/ build<VanillaPencilRulerIcon, SvgProperties>(VanillaPencilRulerIcon, "VanillaPencilRulerIcon")
export const PencilRuler: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPencilRulerIcon>
> = PencilRulerIcon
    