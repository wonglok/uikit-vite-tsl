
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BadgePlusIcon as VanillaBadgePlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BadgePlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgePlusIcon>
> = /*@__PURE__*/ build<VanillaBadgePlusIcon, SvgProperties>(VanillaBadgePlusIcon, "VanillaBadgePlusIcon")
export const BadgePlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgePlusIcon>
> = BadgePlusIcon
    