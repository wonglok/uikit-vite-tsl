
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileLockIcon as VanillaFileLockIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileLockIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileLockIcon>
> = /*@__PURE__*/ build<VanillaFileLockIcon, SvgProperties>(VanillaFileLockIcon, "VanillaFileLockIcon")
export const FileLock: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileLockIcon>
> = FileLockIcon
    