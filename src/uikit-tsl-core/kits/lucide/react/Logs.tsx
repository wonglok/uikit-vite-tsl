
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LogsIcon as VanillaLogsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LogsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLogsIcon>
> = /*@__PURE__*/ build<VanillaLogsIcon, SvgProperties>(VanillaLogsIcon, "VanillaLogsIcon")
export const Logs: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLogsIcon>
> = LogsIcon
    