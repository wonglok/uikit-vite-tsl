
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Repeat2Icon as VanillaRepeat2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Repeat2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRepeat2Icon>
> = /*@__PURE__*/ build<VanillaRepeat2Icon, SvgProperties>(VanillaRepeat2Icon, "VanillaRepeat2Icon")
export const Repeat2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRepeat2Icon>
> = Repeat2Icon
    