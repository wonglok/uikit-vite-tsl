
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Navigation2Icon as VanillaNavigation2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Navigation2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNavigation2Icon>
> = /*@__PURE__*/ build<VanillaNavigation2Icon, SvgProperties>(VanillaNavigation2Icon)
export const Navigation2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNavigation2Icon>
> = Navigation2Icon
    