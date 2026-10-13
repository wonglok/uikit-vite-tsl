
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MegaphoneIcon as VanillaMegaphoneIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MegaphoneIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMegaphoneIcon>
> = /*@__PURE__*/ build<VanillaMegaphoneIcon, SvgProperties>(VanillaMegaphoneIcon)
export const Megaphone: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMegaphoneIcon>
> = MegaphoneIcon
    