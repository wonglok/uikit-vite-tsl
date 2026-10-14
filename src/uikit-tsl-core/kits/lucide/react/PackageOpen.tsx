
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PackageOpenIcon as VanillaPackageOpenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PackageOpenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPackageOpenIcon>
> = /*@__PURE__*/ build<VanillaPackageOpenIcon, SvgProperties>(VanillaPackageOpenIcon, "VanillaPackageOpenIcon")
export const PackageOpen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPackageOpenIcon>
> = PackageOpenIcon
    