
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TablePropertiesIcon as VanillaTablePropertiesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TablePropertiesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTablePropertiesIcon>
> = /*@__PURE__*/ build<VanillaTablePropertiesIcon, SvgProperties>(VanillaTablePropertiesIcon, "VanillaTablePropertiesIcon")
export const TableProperties: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTablePropertiesIcon>
> = TablePropertiesIcon
    