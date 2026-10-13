
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SmilePlusIcon as VanillaSmilePlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SmilePlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSmilePlusIcon>
> = /*@__PURE__*/ build<VanillaSmilePlusIcon, SvgProperties>(VanillaSmilePlusIcon)
export const SmilePlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSmilePlusIcon>
> = SmilePlusIcon
    