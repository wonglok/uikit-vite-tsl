
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileClockIcon as VanillaFileClockIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileClockIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileClockIcon>
> = /*@__PURE__*/ build<VanillaFileClockIcon, SvgProperties>(VanillaFileClockIcon, "VanillaFileClockIcon")
export const FileClock: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileClockIcon>
> = FileClockIcon
    