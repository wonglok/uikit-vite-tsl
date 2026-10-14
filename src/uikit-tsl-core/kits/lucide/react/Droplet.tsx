
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DropletIcon as VanillaDropletIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DropletIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDropletIcon>
> = /*@__PURE__*/ build<VanillaDropletIcon, SvgProperties>(VanillaDropletIcon, "VanillaDropletIcon")
export const Droplet: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDropletIcon>
> = DropletIcon
    