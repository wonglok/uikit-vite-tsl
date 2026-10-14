
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RadicalIcon as VanillaRadicalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RadicalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRadicalIcon>
> = /*@__PURE__*/ build<VanillaRadicalIcon, SvgProperties>(VanillaRadicalIcon, "VanillaRadicalIcon")
export const Radical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRadicalIcon>
> = RadicalIcon
    