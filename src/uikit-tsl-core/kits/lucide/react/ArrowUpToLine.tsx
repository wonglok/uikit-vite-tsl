
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowUpToLineIcon as VanillaArrowUpToLineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowUpToLineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowUpToLineIcon>
> = /*@__PURE__*/ build<VanillaArrowUpToLineIcon, SvgProperties>(VanillaArrowUpToLineIcon, "VanillaArrowUpToLineIcon")
export const ArrowUpToLine: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowUpToLineIcon>
> = ArrowUpToLineIcon
    