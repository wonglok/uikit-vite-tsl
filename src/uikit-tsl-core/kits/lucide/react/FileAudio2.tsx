
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileAudio2Icon as VanillaFileAudio2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileAudio2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileAudio2Icon>
> = /*@__PURE__*/ build<VanillaFileAudio2Icon, SvgProperties>(VanillaFileAudio2Icon)
export const FileAudio2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileAudio2Icon>
> = FileAudio2Icon
    