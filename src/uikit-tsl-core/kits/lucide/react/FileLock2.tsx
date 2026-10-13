
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileLock2Icon as VanillaFileLock2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileLock2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileLock2Icon>
> = /*@__PURE__*/ build<VanillaFileLock2Icon, SvgProperties>(VanillaFileLock2Icon)
export const FileLock2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileLock2Icon>
> = FileLock2Icon
    