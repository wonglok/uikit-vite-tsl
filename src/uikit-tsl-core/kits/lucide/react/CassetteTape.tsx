
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CassetteTapeIcon as VanillaCassetteTapeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CassetteTapeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCassetteTapeIcon>
> = /*@__PURE__*/ build<VanillaCassetteTapeIcon, SvgProperties>(VanillaCassetteTapeIcon)
export const CassetteTape: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCassetteTapeIcon>
> = CassetteTapeIcon
    