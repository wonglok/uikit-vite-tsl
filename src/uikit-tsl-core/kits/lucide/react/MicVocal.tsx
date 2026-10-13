
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MicVocalIcon as VanillaMicVocalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MicVocalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMicVocalIcon>
> = /*@__PURE__*/ build<VanillaMicVocalIcon, SvgProperties>(VanillaMicVocalIcon)
export const MicVocal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMicVocalIcon>
> = MicVocalIcon
    