
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LigatureIcon as VanillaLigatureIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LigatureIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLigatureIcon>
> = /*@__PURE__*/ build<VanillaLigatureIcon, SvgProperties>(VanillaLigatureIcon, "VanillaLigatureIcon")
export const Ligature: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLigatureIcon>
> = LigatureIcon
    