
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CheckCheckIcon as VanillaCheckCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CheckCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCheckCheckIcon>
> = /*@__PURE__*/ build<VanillaCheckCheckIcon, SvgProperties>(VanillaCheckCheckIcon, "VanillaCheckCheckIcon")
export const CheckCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCheckCheckIcon>
> = CheckCheckIcon
    