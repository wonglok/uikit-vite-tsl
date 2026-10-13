
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DownloadIcon as VanillaDownloadIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DownloadIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDownloadIcon>
> = /*@__PURE__*/ build<VanillaDownloadIcon, SvgProperties>(VanillaDownloadIcon)
export const Download: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDownloadIcon>
> = DownloadIcon
    