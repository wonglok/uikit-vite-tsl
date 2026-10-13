
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SwissFrancIcon as VanillaSwissFrancIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SwissFrancIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSwissFrancIcon>
> = /*@__PURE__*/ build<VanillaSwissFrancIcon, SvgProperties>(VanillaSwissFrancIcon)
export const SwissFranc: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSwissFrancIcon>
> = SwissFrancIcon
    