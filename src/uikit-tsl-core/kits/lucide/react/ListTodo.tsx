
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListTodoIcon as VanillaListTodoIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListTodoIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListTodoIcon>
> = /*@__PURE__*/ build<VanillaListTodoIcon, SvgProperties>(VanillaListTodoIcon)
export const ListTodo: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListTodoIcon>
> = ListTodoIcon
    