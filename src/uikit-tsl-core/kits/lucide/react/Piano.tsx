
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PianoIcon as VanillaPianoIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PianoIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPianoIcon>
> = /*@__PURE__*/ build<VanillaPianoIcon, SvgProperties>(VanillaPianoIcon, "VanillaPianoIcon")
export const Piano: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPianoIcon>
> = PianoIcon
    