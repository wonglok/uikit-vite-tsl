
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UndoDotIcon as VanillaUndoDotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UndoDotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUndoDotIcon>
> = /*@__PURE__*/ build<VanillaUndoDotIcon, SvgProperties>(VanillaUndoDotIcon)
export const UndoDot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUndoDotIcon>
> = UndoDotIcon
    