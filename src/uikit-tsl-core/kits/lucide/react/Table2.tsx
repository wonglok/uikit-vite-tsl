
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Table2Icon as VanillaTable2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Table2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTable2Icon>
> = /*@__PURE__*/ build<VanillaTable2Icon, SvgProperties>(VanillaTable2Icon)
export const Table2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTable2Icon>
> = Table2Icon
    