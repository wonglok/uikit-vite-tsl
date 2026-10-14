
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FilePlus2Icon as VanillaFilePlus2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FilePlus2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFilePlus2Icon>
> = /*@__PURE__*/ build<VanillaFilePlus2Icon, SvgProperties>(VanillaFilePlus2Icon, "VanillaFilePlus2Icon")
export const FilePlus2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFilePlus2Icon>
> = FilePlus2Icon
    