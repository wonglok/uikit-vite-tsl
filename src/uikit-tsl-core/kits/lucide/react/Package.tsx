
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PackageIcon as VanillaPackageIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PackageIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPackageIcon>
> = /*@__PURE__*/ build<VanillaPackageIcon, SvgProperties>(VanillaPackageIcon)
export const Package: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPackageIcon>
> = PackageIcon
    