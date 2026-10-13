
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileMusicIcon as VanillaFileMusicIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileMusicIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileMusicIcon>
> = /*@__PURE__*/ build<VanillaFileMusicIcon, SvgProperties>(VanillaFileMusicIcon)
export const FileMusic: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileMusicIcon>
> = FileMusicIcon
    