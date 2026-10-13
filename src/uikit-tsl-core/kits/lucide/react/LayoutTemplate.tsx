
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LayoutTemplateIcon as VanillaLayoutTemplateIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LayoutTemplateIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLayoutTemplateIcon>
> = /*@__PURE__*/ build<VanillaLayoutTemplateIcon, SvgProperties>(VanillaLayoutTemplateIcon)
export const LayoutTemplate: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLayoutTemplateIcon>
> = LayoutTemplateIcon
    