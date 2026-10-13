
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileDiffIcon as VanillaFileDiffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileDiffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileDiffIcon>
> = /*@__PURE__*/ build<VanillaFileDiffIcon, SvgProperties>(VanillaFileDiffIcon)
export const FileDiff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileDiffIcon>
> = FileDiffIcon
    