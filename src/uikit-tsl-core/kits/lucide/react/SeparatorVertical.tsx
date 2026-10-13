
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SeparatorVerticalIcon as VanillaSeparatorVerticalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SeparatorVerticalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSeparatorVerticalIcon>
> = /*@__PURE__*/ build<VanillaSeparatorVerticalIcon, SvgProperties>(VanillaSeparatorVerticalIcon)
export const SeparatorVertical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSeparatorVerticalIcon>
> = SeparatorVerticalIcon
    