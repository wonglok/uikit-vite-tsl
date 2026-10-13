
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SignpostBigIcon as VanillaSignpostBigIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SignpostBigIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSignpostBigIcon>
> = /*@__PURE__*/ build<VanillaSignpostBigIcon, SvgProperties>(VanillaSignpostBigIcon)
export const SignpostBig: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSignpostBigIcon>
> = SignpostBigIcon
    