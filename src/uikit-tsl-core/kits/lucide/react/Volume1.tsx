
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Volume1Icon as VanillaVolume1Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Volume1Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVolume1Icon>
> = /*@__PURE__*/ build<VanillaVolume1Icon, SvgProperties>(VanillaVolume1Icon, "VanillaVolume1Icon")
export const Volume1: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVolume1Icon>
> = Volume1Icon
    