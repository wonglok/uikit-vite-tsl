
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileDigitIcon as VanillaFileDigitIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileDigitIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileDigitIcon>
> = /*@__PURE__*/ build<VanillaFileDigitIcon, SvgProperties>(VanillaFileDigitIcon, "VanillaFileDigitIcon")
export const FileDigit: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileDigitIcon>
> = FileDigitIcon
    