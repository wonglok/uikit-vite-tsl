
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PaperclipIcon as VanillaPaperclipIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PaperclipIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPaperclipIcon>
> = /*@__PURE__*/ build<VanillaPaperclipIcon, SvgProperties>(VanillaPaperclipIcon)
export const Paperclip: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPaperclipIcon>
> = PaperclipIcon
    