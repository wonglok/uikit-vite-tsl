
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileScanIcon as VanillaFileScanIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileScanIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileScanIcon>
> = /*@__PURE__*/ build<VanillaFileScanIcon, SvgProperties>(VanillaFileScanIcon, "VanillaFileScanIcon")
export const FileScan: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileScanIcon>
> = FileScanIcon
    