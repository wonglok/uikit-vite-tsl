
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Layers2Icon as VanillaLayers2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Layers2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLayers2Icon>
> = /*@__PURE__*/ build<VanillaLayers2Icon, SvgProperties>(VanillaLayers2Icon, "VanillaLayers2Icon")
export const Layers2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLayers2Icon>
> = Layers2Icon
    