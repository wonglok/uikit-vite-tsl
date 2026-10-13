
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileOutputIcon as VanillaFileOutputIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileOutputIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileOutputIcon>
> = /*@__PURE__*/ build<VanillaFileOutputIcon, SvgProperties>(VanillaFileOutputIcon)
export const FileOutput: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileOutputIcon>
> = FileOutputIcon
    