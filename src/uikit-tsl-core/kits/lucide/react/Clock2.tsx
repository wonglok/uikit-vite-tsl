
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Clock2Icon as VanillaClock2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Clock2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock2Icon>
> = /*@__PURE__*/ build<VanillaClock2Icon, SvgProperties>(VanillaClock2Icon, "VanillaClock2Icon")
export const Clock2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock2Icon>
> = Clock2Icon
    