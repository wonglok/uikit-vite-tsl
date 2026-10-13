
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { NonBinaryIcon as VanillaNonBinaryIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const NonBinaryIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNonBinaryIcon>
> = /*@__PURE__*/ build<VanillaNonBinaryIcon, SvgProperties>(VanillaNonBinaryIcon)
export const NonBinary: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNonBinaryIcon>
> = NonBinaryIcon
    