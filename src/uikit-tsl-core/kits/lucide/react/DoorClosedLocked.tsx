
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DoorClosedLockedIcon as VanillaDoorClosedLockedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DoorClosedLockedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDoorClosedLockedIcon>
> = /*@__PURE__*/ build<VanillaDoorClosedLockedIcon, SvgProperties>(VanillaDoorClosedLockedIcon)
export const DoorClosedLocked: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDoorClosedLockedIcon>
> = DoorClosedLockedIcon
    