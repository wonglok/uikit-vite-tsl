
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WebhookOffIcon as VanillaWebhookOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WebhookOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWebhookOffIcon>
> = /*@__PURE__*/ build<VanillaWebhookOffIcon, SvgProperties>(VanillaWebhookOffIcon)
export const WebhookOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWebhookOffIcon>
> = WebhookOffIcon
    