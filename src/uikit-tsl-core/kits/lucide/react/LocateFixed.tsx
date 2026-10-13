
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LocateFixedIcon as VanillaLocateFixedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LocateFixedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLocateFixedIcon>
> = /*@__PURE__*/ build<VanillaLocateFixedIcon, SvgProperties>(VanillaLocateFixedIcon)
export const LocateFixed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLocateFixedIcon>
> = LocateFixedIcon
    