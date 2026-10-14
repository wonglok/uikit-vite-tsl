
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { KeyIcon as VanillaKeyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const KeyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaKeyIcon>
> = /*@__PURE__*/ build<VanillaKeyIcon, SvgProperties>(VanillaKeyIcon, "VanillaKeyIcon")
export const Key: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaKeyIcon>
> = KeyIcon
    