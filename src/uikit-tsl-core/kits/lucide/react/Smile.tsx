
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SmileIcon as VanillaSmileIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SmileIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSmileIcon>
> = /*@__PURE__*/ build<VanillaSmileIcon, SvgProperties>(VanillaSmileIcon)
export const Smile: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSmileIcon>
> = SmileIcon
    