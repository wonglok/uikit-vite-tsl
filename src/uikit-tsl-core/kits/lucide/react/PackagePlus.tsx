
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PackagePlusIcon as VanillaPackagePlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PackagePlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPackagePlusIcon>
> = /*@__PURE__*/ build<VanillaPackagePlusIcon, SvgProperties>(VanillaPackagePlusIcon, "VanillaPackagePlusIcon")
export const PackagePlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPackagePlusIcon>
> = PackagePlusIcon
    