
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TransgenderIcon as VanillaTransgenderIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TransgenderIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTransgenderIcon>
> = /*@__PURE__*/ build<VanillaTransgenderIcon, SvgProperties>(VanillaTransgenderIcon, "VanillaTransgenderIcon")
export const Transgender: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTransgenderIcon>
> = TransgenderIcon
    