
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CupSodaIcon as VanillaCupSodaIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CupSodaIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCupSodaIcon>
> = /*@__PURE__*/ build<VanillaCupSodaIcon, SvgProperties>(VanillaCupSodaIcon, "VanillaCupSodaIcon")
export const CupSoda: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCupSodaIcon>
> = CupSodaIcon
    