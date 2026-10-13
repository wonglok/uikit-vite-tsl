
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CodesandboxIcon as VanillaCodesandboxIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CodesandboxIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCodesandboxIcon>
> = /*@__PURE__*/ build<VanillaCodesandboxIcon, SvgProperties>(VanillaCodesandboxIcon)
export const Codesandbox: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCodesandboxIcon>
> = CodesandboxIcon
    