
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PackageSearchIcon as VanillaPackageSearchIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PackageSearchIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPackageSearchIcon>
> = /*@__PURE__*/ build<VanillaPackageSearchIcon, SvgProperties>(VanillaPackageSearchIcon)
export const PackageSearch: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPackageSearchIcon>
> = PackageSearchIcon
    