
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BriefcaseIcon as VanillaBriefcaseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BriefcaseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBriefcaseIcon>
> = /*@__PURE__*/ build<VanillaBriefcaseIcon, SvgProperties>(VanillaBriefcaseIcon, "VanillaBriefcaseIcon")
export const Briefcase: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBriefcaseIcon>
> = BriefcaseIcon
    