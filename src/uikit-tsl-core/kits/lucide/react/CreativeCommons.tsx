
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CreativeCommonsIcon as VanillaCreativeCommonsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CreativeCommonsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCreativeCommonsIcon>
> = /*@__PURE__*/ build<VanillaCreativeCommonsIcon, SvgProperties>(VanillaCreativeCommonsIcon, "VanillaCreativeCommonsIcon")
export const CreativeCommons: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCreativeCommonsIcon>
> = CreativeCommonsIcon
    