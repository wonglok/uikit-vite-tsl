
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CheckIcon as VanillaCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCheckIcon>
> = /*@__PURE__*/ build<VanillaCheckIcon, SvgProperties>(VanillaCheckIcon)
export const Check: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCheckIcon>
> = CheckIcon
    