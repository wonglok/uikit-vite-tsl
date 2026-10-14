
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CopyrightIcon as VanillaCopyrightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CopyrightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCopyrightIcon>
> = /*@__PURE__*/ build<VanillaCopyrightIcon, SvgProperties>(VanillaCopyrightIcon, "VanillaCopyrightIcon")
export const Copyright: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCopyrightIcon>
> = CopyrightIcon
    