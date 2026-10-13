
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CaseSensitiveIcon as VanillaCaseSensitiveIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CaseSensitiveIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCaseSensitiveIcon>
> = /*@__PURE__*/ build<VanillaCaseSensitiveIcon, SvgProperties>(VanillaCaseSensitiveIcon)
export const CaseSensitive: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCaseSensitiveIcon>
> = CaseSensitiveIcon
    