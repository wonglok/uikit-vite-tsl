
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Badge as VanillaBadge, BadgeProperties as VanillaBadgeProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Badge as VanillaBadge } from '../../core/index'

export type BadgeProperties = VanillaBadgeProperties & { children?: ReactNode } & ClassListProperties

export const Badge: ForwardRefExoticComponent<
  PropsWithoutRef<BadgeProperties> & RefAttributes<VanillaBadge>
> = /* @__PURE__ */ build<VanillaBadge, BadgeProperties>(VanillaBadge, "VanillaDefaultBadge")
    
