
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PackageCheckIcon as VanillaPackageCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PackageCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPackageCheckIcon>
> = /*@__PURE__*/ build<VanillaPackageCheckIcon, SvgProperties>(VanillaPackageCheckIcon, "VanillaPackageCheckIcon")
export const PackageCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPackageCheckIcon>
> = PackageCheckIcon
    