
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WandSparklesIcon as VanillaWandSparklesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WandSparklesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWandSparklesIcon>
> = /*@__PURE__*/ build<VanillaWandSparklesIcon, SvgProperties>(VanillaWandSparklesIcon, "VanillaWandSparklesIcon")
export const WandSparkles: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWandSparklesIcon>
> = WandSparklesIcon
    