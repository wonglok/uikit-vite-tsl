
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PresentationIcon as VanillaPresentationIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PresentationIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPresentationIcon>
> = /*@__PURE__*/ build<VanillaPresentationIcon, SvgProperties>(VanillaPresentationIcon, "VanillaPresentationIcon")
export const Presentation: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPresentationIcon>
> = PresentationIcon
    