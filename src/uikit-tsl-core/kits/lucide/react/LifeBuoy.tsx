
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LifeBuoyIcon as VanillaLifeBuoyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LifeBuoyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLifeBuoyIcon>
> = /*@__PURE__*/ build<VanillaLifeBuoyIcon, SvgProperties>(VanillaLifeBuoyIcon)
export const LifeBuoy: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLifeBuoyIcon>
> = LifeBuoyIcon
    