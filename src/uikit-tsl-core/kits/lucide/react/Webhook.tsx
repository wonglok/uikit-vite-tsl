
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WebhookIcon as VanillaWebhookIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WebhookIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWebhookIcon>
> = /*@__PURE__*/ build<VanillaWebhookIcon, SvgProperties>(VanillaWebhookIcon, "VanillaWebhookIcon")
export const Webhook: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWebhookIcon>
> = WebhookIcon
    