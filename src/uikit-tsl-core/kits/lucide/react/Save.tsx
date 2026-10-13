
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SaveIcon as VanillaSaveIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SaveIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSaveIcon>
> = /*@__PURE__*/ build<VanillaSaveIcon, SvgProperties>(VanillaSaveIcon)
export const Save: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSaveIcon>
> = SaveIcon
    