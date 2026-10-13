
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AtomIcon as VanillaAtomIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AtomIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAtomIcon>
> = /*@__PURE__*/ build<VanillaAtomIcon, SvgProperties>(VanillaAtomIcon)
export const Atom: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAtomIcon>
> = AtomIcon
    