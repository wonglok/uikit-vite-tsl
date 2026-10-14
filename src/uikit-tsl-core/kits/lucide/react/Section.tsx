
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SectionIcon as VanillaSectionIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SectionIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSectionIcon>
> = /*@__PURE__*/ build<VanillaSectionIcon, SvgProperties>(VanillaSectionIcon, "VanillaSectionIcon")
export const Section: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSectionIcon>
> = SectionIcon
    