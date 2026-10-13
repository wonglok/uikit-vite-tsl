
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CodepenIcon as VanillaCodepenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CodepenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCodepenIcon>
> = /*@__PURE__*/ build<VanillaCodepenIcon, SvgProperties>(VanillaCodepenIcon)
export const Codepen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCodepenIcon>
> = CodepenIcon
    