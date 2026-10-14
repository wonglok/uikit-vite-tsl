
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RemoveFormattingIcon as VanillaRemoveFormattingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RemoveFormattingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRemoveFormattingIcon>
> = /*@__PURE__*/ build<VanillaRemoveFormattingIcon, SvgProperties>(VanillaRemoveFormattingIcon, "VanillaRemoveFormattingIcon")
export const RemoveFormatting: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRemoveFormattingIcon>
> = RemoveFormattingIcon
    