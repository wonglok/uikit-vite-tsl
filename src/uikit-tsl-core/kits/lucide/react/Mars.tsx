
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MarsIcon as VanillaMarsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MarsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMarsIcon>
> = /*@__PURE__*/ build<VanillaMarsIcon, SvgProperties>(VanillaMarsIcon)
export const Mars: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMarsIcon>
> = MarsIcon
    