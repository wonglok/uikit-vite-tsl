
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SnowflakeIcon as VanillaSnowflakeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SnowflakeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSnowflakeIcon>
> = /*@__PURE__*/ build<VanillaSnowflakeIcon, SvgProperties>(VanillaSnowflakeIcon)
export const Snowflake: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSnowflakeIcon>
> = SnowflakeIcon
    