
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LanguagesIcon as VanillaLanguagesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LanguagesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLanguagesIcon>
> = /*@__PURE__*/ build<VanillaLanguagesIcon, SvgProperties>(VanillaLanguagesIcon, "VanillaLanguagesIcon")
export const Languages: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLanguagesIcon>
> = LanguagesIcon
    