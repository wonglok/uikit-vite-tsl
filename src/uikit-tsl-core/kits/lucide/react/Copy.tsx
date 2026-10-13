
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CopyIcon as VanillaCopyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CopyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCopyIcon>
> = /*@__PURE__*/ build<VanillaCopyIcon, SvgProperties>(VanillaCopyIcon)
export const Copy: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCopyIcon>
> = CopyIcon
    