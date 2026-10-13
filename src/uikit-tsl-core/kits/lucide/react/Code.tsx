
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CodeIcon as VanillaCodeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CodeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCodeIcon>
> = /*@__PURE__*/ build<VanillaCodeIcon, SvgProperties>(VanillaCodeIcon)
export const Code: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCodeIcon>
> = CodeIcon
    