import type { z } from 'zod'
import { SvgPropertiesSchema } from '../../../../index'
import {
  searchFor,
  SvgOutProperties,
  SvgProperties,
  InProperties,
  RenderContext,
  BaseOutProperties,
} from '../../../../index'
import { ChevronDown } from '../../../lucide/index'
import { computed } from '@preact/signals-core'
import { Accordion } from './index'
import { AccordionItem } from './item'
import { colors, contentDefaults } from '../theme'
export const AccordionTriggerIconPropertiesSchema = SvgPropertiesSchema

export type AccordionTriggerIconProperties = z.input<typeof AccordionTriggerIconPropertiesSchema>

export class AccordionTriggerIcon extends ChevronDown<SvgOutProperties> {
  constructor(
    inputProperties?: InProperties<SvgOutProperties>,
    initialClasses?: Array<BaseOutProperties | string>,
    config?: {
      renderContext?: RenderContext
      defaultOverrides?: InProperties<SvgOutProperties>
    },
  ) {
    super(inputProperties, initialClasses, {
      defaults: contentDefaults,
      ...config,
      defaultOverrides: {
        '*': {
          borderColor: colors.border,
        },
        width: 16,
        height: 16,
        flexShrink: 0,
        transformRotateZ: computed(() => {
          const item = searchFor(this, AccordionItem, 2)
          if (item == null) {
            return 0
          }
          const accordion = searchFor(item, Accordion, 2)
          return item.properties.value.value === accordion?.openItemValue.value ? 180 : 0
        }),
        ...config?.defaultOverrides,
      },
    })
  }
}
