
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HardDriveIcon as VanillaHardDriveIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HardDriveIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHardDriveIcon>
> = /*@__PURE__*/ build<VanillaHardDriveIcon, SvgProperties>(VanillaHardDriveIcon)
export const HardDrive: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHardDriveIcon>
> = HardDriveIcon
    