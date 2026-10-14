
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileWarningIcon as VanillaFileWarningIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileWarningIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileWarningIcon>
> = /*@__PURE__*/ build<VanillaFileWarningIcon, SvgProperties>(VanillaFileWarningIcon, "VanillaFileWarningIcon")
export const FileWarning: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileWarningIcon>
> = FileWarningIcon
    