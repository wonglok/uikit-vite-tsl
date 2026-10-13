
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ReplaceIcon as VanillaReplaceIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ReplaceIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaReplaceIcon>
> = /*@__PURE__*/ build<VanillaReplaceIcon, SvgProperties>(VanillaReplaceIcon)
export const Replace: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaReplaceIcon>
> = ReplaceIcon
    