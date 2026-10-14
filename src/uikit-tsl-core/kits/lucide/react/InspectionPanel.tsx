
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { InspectionPanelIcon as VanillaInspectionPanelIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const InspectionPanelIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaInspectionPanelIcon>
> = /*@__PURE__*/ build<VanillaInspectionPanelIcon, SvgProperties>(VanillaInspectionPanelIcon, "VanillaInspectionPanelIcon")
export const InspectionPanel: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaInspectionPanelIcon>
> = InspectionPanelIcon
    