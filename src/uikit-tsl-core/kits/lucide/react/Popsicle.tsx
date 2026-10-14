
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PopsicleIcon as VanillaPopsicleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PopsicleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPopsicleIcon>
> = /*@__PURE__*/ build<VanillaPopsicleIcon, SvgProperties>(VanillaPopsicleIcon, "VanillaPopsicleIcon")
export const Popsicle: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPopsicleIcon>
> = PopsicleIcon
    