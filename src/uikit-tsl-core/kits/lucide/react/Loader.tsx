
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LoaderIcon as VanillaLoaderIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LoaderIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLoaderIcon>
> = /*@__PURE__*/ build<VanillaLoaderIcon, SvgProperties>(VanillaLoaderIcon, "VanillaLoaderIcon")
export const Loader: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLoaderIcon>
> = LoaderIcon
    