
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SpellCheck2Icon as VanillaSpellCheck2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SpellCheck2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSpellCheck2Icon>
> = /*@__PURE__*/ build<VanillaSpellCheck2Icon, SvgProperties>(VanillaSpellCheck2Icon, "VanillaSpellCheck2Icon")
export const SpellCheck2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSpellCheck2Icon>
> = SpellCheck2Icon
    