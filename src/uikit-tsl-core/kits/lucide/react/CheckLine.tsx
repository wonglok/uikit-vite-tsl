
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CheckLineIcon as VanillaCheckLineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CheckLineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCheckLineIcon>
> = /*@__PURE__*/ build<VanillaCheckLineIcon, SvgProperties>(VanillaCheckLineIcon)
export const CheckLine: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCheckLineIcon>
> = CheckLineIcon
    