
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SparklesIcon as VanillaSparklesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SparklesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSparklesIcon>
> = /*@__PURE__*/ build<VanillaSparklesIcon, SvgProperties>(VanillaSparklesIcon, "VanillaSparklesIcon")
export const Sparkles: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSparklesIcon>
> = SparklesIcon
    