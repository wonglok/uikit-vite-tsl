
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DatabaseIcon as VanillaDatabaseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DatabaseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDatabaseIcon>
> = /*@__PURE__*/ build<VanillaDatabaseIcon, SvgProperties>(VanillaDatabaseIcon)
export const Database: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDatabaseIcon>
> = DatabaseIcon
    