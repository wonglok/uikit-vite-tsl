
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListRestartIcon as VanillaListRestartIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListRestartIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListRestartIcon>
> = /*@__PURE__*/ build<VanillaListRestartIcon, SvgProperties>(VanillaListRestartIcon)
export const ListRestart: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListRestartIcon>
> = ListRestartIcon
    