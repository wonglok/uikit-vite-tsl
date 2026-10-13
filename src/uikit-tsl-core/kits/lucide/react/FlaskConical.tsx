
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FlaskConicalIcon as VanillaFlaskConicalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FlaskConicalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlaskConicalIcon>
> = /*@__PURE__*/ build<VanillaFlaskConicalIcon, SvgProperties>(VanillaFlaskConicalIcon)
export const FlaskConical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlaskConicalIcon>
> = FlaskConicalIcon
    