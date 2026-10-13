
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { IterationCcwIcon as VanillaIterationCcwIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const IterationCcwIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaIterationCcwIcon>
> = /*@__PURE__*/ build<VanillaIterationCcwIcon, SvgProperties>(VanillaIterationCcwIcon)
export const IterationCcw: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaIterationCcwIcon>
> = IterationCcwIcon
    