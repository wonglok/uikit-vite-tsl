
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BugIcon as VanillaBugIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BugIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBugIcon>
> = /*@__PURE__*/ build<VanillaBugIcon, SvgProperties>(VanillaBugIcon, "VanillaBugIcon")
export const Bug: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBugIcon>
> = BugIcon
    