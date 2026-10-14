
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AnnoyedIcon as VanillaAnnoyedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AnnoyedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAnnoyedIcon>
> = /*@__PURE__*/ build<VanillaAnnoyedIcon, SvgProperties>(VanillaAnnoyedIcon, "VanillaAnnoyedIcon")
export const Annoyed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAnnoyedIcon>
> = AnnoyedIcon
    