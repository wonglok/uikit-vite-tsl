
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageSquareDiffIcon as VanillaMessageSquareDiffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageSquareDiffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareDiffIcon>
> = /*@__PURE__*/ build<VanillaMessageSquareDiffIcon, SvgProperties>(VanillaMessageSquareDiffIcon)
export const MessageSquareDiff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareDiffIcon>
> = MessageSquareDiffIcon
    