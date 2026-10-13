
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LoaderCircleIcon as VanillaLoaderCircleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LoaderCircleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLoaderCircleIcon>
> = /*@__PURE__*/ build<VanillaLoaderCircleIcon, SvgProperties>(VanillaLoaderCircleIcon)
export const LoaderCircle: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLoaderCircleIcon>
> = LoaderCircleIcon
    