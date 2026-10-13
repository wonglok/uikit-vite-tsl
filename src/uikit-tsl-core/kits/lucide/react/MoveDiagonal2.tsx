
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MoveDiagonal2Icon as VanillaMoveDiagonal2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MoveDiagonal2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveDiagonal2Icon>
> = /*@__PURE__*/ build<VanillaMoveDiagonal2Icon, SvgProperties>(VanillaMoveDiagonal2Icon)
export const MoveDiagonal2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveDiagonal2Icon>
> = MoveDiagonal2Icon
    