
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Volume2Icon as VanillaVolume2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Volume2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVolume2Icon>
> = /*@__PURE__*/ build<VanillaVolume2Icon, SvgProperties>(VanillaVolume2Icon)
export const Volume2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVolume2Icon>
> = Volume2Icon
    