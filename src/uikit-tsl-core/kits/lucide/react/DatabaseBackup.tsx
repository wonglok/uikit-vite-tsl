
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DatabaseBackupIcon as VanillaDatabaseBackupIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DatabaseBackupIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDatabaseBackupIcon>
> = /*@__PURE__*/ build<VanillaDatabaseBackupIcon, SvgProperties>(VanillaDatabaseBackupIcon)
export const DatabaseBackup: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDatabaseBackupIcon>
> = DatabaseBackupIcon
    