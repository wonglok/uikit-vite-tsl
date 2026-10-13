
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SparkleIcon as VanillaSparkleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SparkleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSparkleIcon>
> = /*@__PURE__*/ build<VanillaSparkleIcon, SvgProperties>(VanillaSparkleIcon)
export const Sparkle: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSparkleIcon>
> = SparkleIcon
    