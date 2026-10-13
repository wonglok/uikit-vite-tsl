
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EraserIcon as VanillaEraserIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EraserIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEraserIcon>
> = /*@__PURE__*/ build<VanillaEraserIcon, SvgProperties>(VanillaEraserIcon)
export const Eraser: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEraserIcon>
> = EraserIcon
    