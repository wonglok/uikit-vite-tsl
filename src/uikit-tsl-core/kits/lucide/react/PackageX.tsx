
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PackageXIcon as VanillaPackageXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PackageXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPackageXIcon>
> = /*@__PURE__*/ build<VanillaPackageXIcon, SvgProperties>(VanillaPackageXIcon, "VanillaPackageXIcon")
export const PackageX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPackageXIcon>
> = PackageXIcon
    