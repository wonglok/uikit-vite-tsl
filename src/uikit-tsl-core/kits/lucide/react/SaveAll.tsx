
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SaveAllIcon as VanillaSaveAllIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SaveAllIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSaveAllIcon>
> = /*@__PURE__*/ build<VanillaSaveAllIcon, SvgProperties>(VanillaSaveAllIcon, "VanillaSaveAllIcon")
export const SaveAll: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSaveAllIcon>
> = SaveAllIcon
    