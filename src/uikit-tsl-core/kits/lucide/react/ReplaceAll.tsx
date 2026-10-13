
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ReplaceAllIcon as VanillaReplaceAllIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ReplaceAllIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaReplaceAllIcon>
> = /*@__PURE__*/ build<VanillaReplaceAllIcon, SvgProperties>(VanillaReplaceAllIcon)
export const ReplaceAll: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaReplaceAllIcon>
> = ReplaceAllIcon
    