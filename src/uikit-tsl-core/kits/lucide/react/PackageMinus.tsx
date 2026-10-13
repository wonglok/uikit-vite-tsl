
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PackageMinusIcon as VanillaPackageMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PackageMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPackageMinusIcon>
> = /*@__PURE__*/ build<VanillaPackageMinusIcon, SvgProperties>(VanillaPackageMinusIcon)
export const PackageMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPackageMinusIcon>
> = PackageMinusIcon
    