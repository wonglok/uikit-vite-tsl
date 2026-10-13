
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DatabaseZapIcon as VanillaDatabaseZapIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DatabaseZapIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDatabaseZapIcon>
> = /*@__PURE__*/ build<VanillaDatabaseZapIcon, SvgProperties>(VanillaDatabaseZapIcon)
export const DatabaseZap: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDatabaseZapIcon>
> = DatabaseZapIcon
    