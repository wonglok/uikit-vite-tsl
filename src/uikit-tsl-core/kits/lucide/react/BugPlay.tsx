
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BugPlayIcon as VanillaBugPlayIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BugPlayIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBugPlayIcon>
> = /*@__PURE__*/ build<VanillaBugPlayIcon, SvgProperties>(VanillaBugPlayIcon, "VanillaBugPlayIcon")
export const BugPlay: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBugPlayIcon>
> = BugPlayIcon
    