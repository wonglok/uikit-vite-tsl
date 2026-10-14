
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FilePenLineIcon as VanillaFilePenLineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FilePenLineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFilePenLineIcon>
> = /*@__PURE__*/ build<VanillaFilePenLineIcon, SvgProperties>(VanillaFilePenLineIcon, "VanillaFilePenLineIcon")
export const FilePenLine: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFilePenLineIcon>
> = FilePenLineIcon
    