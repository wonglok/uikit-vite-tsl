
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DoorClosedIcon as VanillaDoorClosedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DoorClosedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDoorClosedIcon>
> = /*@__PURE__*/ build<VanillaDoorClosedIcon, SvgProperties>(VanillaDoorClosedIcon, "VanillaDoorClosedIcon")
export const DoorClosed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDoorClosedIcon>
> = DoorClosedIcon
    