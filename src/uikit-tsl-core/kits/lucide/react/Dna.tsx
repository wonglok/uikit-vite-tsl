
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DnaIcon as VanillaDnaIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DnaIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDnaIcon>
> = /*@__PURE__*/ build<VanillaDnaIcon, SvgProperties>(VanillaDnaIcon)
export const Dna: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDnaIcon>
> = DnaIcon
    