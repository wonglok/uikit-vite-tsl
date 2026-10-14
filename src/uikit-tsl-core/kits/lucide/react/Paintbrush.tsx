
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PaintbrushIcon as VanillaPaintbrushIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PaintbrushIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPaintbrushIcon>
> = /*@__PURE__*/ build<VanillaPaintbrushIcon, SvgProperties>(VanillaPaintbrushIcon, "VanillaPaintbrushIcon")
export const Paintbrush: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPaintbrushIcon>
> = PaintbrushIcon
    