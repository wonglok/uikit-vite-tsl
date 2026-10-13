
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DoorOpenIcon as VanillaDoorOpenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DoorOpenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDoorOpenIcon>
> = /*@__PURE__*/ build<VanillaDoorOpenIcon, SvgProperties>(VanillaDoorOpenIcon)
export const DoorOpen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDoorOpenIcon>
> = DoorOpenIcon
    