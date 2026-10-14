
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { KeySquareIcon as VanillaKeySquareIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const KeySquareIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaKeySquareIcon>
> = /*@__PURE__*/ build<VanillaKeySquareIcon, SvgProperties>(VanillaKeySquareIcon, "VanillaKeySquareIcon")
export const KeySquare: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaKeySquareIcon>
> = KeySquareIcon
    