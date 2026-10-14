
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ContainerIcon as VanillaContainerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ContainerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaContainerIcon>
> = /*@__PURE__*/ build<VanillaContainerIcon, SvgProperties>(VanillaContainerIcon, "VanillaContainerIcon")
export const Container: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaContainerIcon>
> = ContainerIcon
    