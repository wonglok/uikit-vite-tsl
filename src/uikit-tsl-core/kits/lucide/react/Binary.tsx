
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BinaryIcon as VanillaBinaryIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BinaryIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBinaryIcon>
> = /*@__PURE__*/ build<VanillaBinaryIcon, SvgProperties>(VanillaBinaryIcon, "VanillaBinaryIcon")
export const Binary: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBinaryIcon>
> = BinaryIcon
    