
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Share2Icon as VanillaShare2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Share2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShare2Icon>
> = /*@__PURE__*/ build<VanillaShare2Icon, SvgProperties>(VanillaShare2Icon)
export const Share2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShare2Icon>
> = Share2Icon
    