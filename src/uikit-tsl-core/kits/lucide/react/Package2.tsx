
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Package2Icon as VanillaPackage2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Package2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPackage2Icon>
> = /*@__PURE__*/ build<VanillaPackage2Icon, SvgProperties>(VanillaPackage2Icon)
export const Package2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPackage2Icon>
> = Package2Icon
    