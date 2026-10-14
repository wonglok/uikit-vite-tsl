
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { KeyRoundIcon as VanillaKeyRoundIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const KeyRoundIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaKeyRoundIcon>
> = /*@__PURE__*/ build<VanillaKeyRoundIcon, SvgProperties>(VanillaKeyRoundIcon, "VanillaKeyRoundIcon")
export const KeyRound: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaKeyRoundIcon>
> = KeyRoundIcon
    