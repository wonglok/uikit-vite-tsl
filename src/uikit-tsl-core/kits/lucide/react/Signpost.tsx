
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SignpostIcon as VanillaSignpostIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SignpostIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSignpostIcon>
> = /*@__PURE__*/ build<VanillaSignpostIcon, SvgProperties>(VanillaSignpostIcon, "VanillaSignpostIcon")
export const Signpost: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSignpostIcon>
> = SignpostIcon
    