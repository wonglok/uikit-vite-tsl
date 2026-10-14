
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageSquareDotIcon as VanillaMessageSquareDotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageSquareDotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareDotIcon>
> = /*@__PURE__*/ build<VanillaMessageSquareDotIcon, SvgProperties>(VanillaMessageSquareDotIcon, "VanillaMessageSquareDotIcon")
export const MessageSquareDot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareDotIcon>
> = MessageSquareDotIcon
    