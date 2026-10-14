
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileQuestionIcon as VanillaFileQuestionIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileQuestionIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileQuestionIcon>
> = /*@__PURE__*/ build<VanillaFileQuestionIcon, SvgProperties>(VanillaFileQuestionIcon, "VanillaFileQuestionIcon")
export const FileQuestion: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileQuestionIcon>
> = FileQuestionIcon
    