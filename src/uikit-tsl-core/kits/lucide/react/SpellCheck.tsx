
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SpellCheckIcon as VanillaSpellCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SpellCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSpellCheckIcon>
> = /*@__PURE__*/ build<VanillaSpellCheckIcon, SvgProperties>(VanillaSpellCheckIcon, "VanillaSpellCheckIcon")
export const SpellCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSpellCheckIcon>
> = SpellCheckIcon
    