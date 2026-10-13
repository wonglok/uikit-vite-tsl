
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BriefcaseMedicalIcon as VanillaBriefcaseMedicalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BriefcaseMedicalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBriefcaseMedicalIcon>
> = /*@__PURE__*/ build<VanillaBriefcaseMedicalIcon, SvgProperties>(VanillaBriefcaseMedicalIcon)
export const BriefcaseMedical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBriefcaseMedicalIcon>
> = BriefcaseMedicalIcon
    