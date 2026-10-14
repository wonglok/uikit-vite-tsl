
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HistoryIcon as VanillaHistoryIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HistoryIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHistoryIcon>
> = /*@__PURE__*/ build<VanillaHistoryIcon, SvgProperties>(VanillaHistoryIcon, "VanillaHistoryIcon")
export const History: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHistoryIcon>
> = HistoryIcon
    