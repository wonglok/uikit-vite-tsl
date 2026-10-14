
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BugOffIcon as VanillaBugOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BugOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBugOffIcon>
> = /*@__PURE__*/ build<VanillaBugOffIcon, SvgProperties>(VanillaBugOffIcon, "VanillaBugOffIcon")
export const BugOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBugOffIcon>
> = BugOffIcon
    