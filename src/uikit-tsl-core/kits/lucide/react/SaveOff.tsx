
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SaveOffIcon as VanillaSaveOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SaveOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSaveOffIcon>
> = /*@__PURE__*/ build<VanillaSaveOffIcon, SvgProperties>(VanillaSaveOffIcon)
export const SaveOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSaveOffIcon>
> = SaveOffIcon
    