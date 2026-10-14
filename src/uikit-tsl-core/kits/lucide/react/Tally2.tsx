
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Tally2Icon as VanillaTally2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Tally2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTally2Icon>
> = /*@__PURE__*/ build<VanillaTally2Icon, SvgProperties>(VanillaTally2Icon, "VanillaTally2Icon")
export const Tally2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTally2Icon>
> = Tally2Icon
    