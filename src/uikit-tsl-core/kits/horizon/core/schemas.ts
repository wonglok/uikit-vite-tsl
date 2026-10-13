import { AvatarPropertiesSchema } from './avatar/index'
import { BadgePropertiesSchema } from './badge/index'
import { ButtonIconPropertiesSchema } from './button/icon'
import { ButtonPropertiesSchema } from './button/index'
import { ButtonLabelPropertiesSchema } from './button/label'
import { ButtonLabelSubtextPropertiesSchema } from './button/label-subtext'
import { CheckboxPropertiesSchema } from './checkbox/index'
import { DividerPropertiesSchema } from './divider/index'
import { DropdownAvatarPropertiesSchema } from './dropdown/avatar'
import { DropdownButtonPropertiesSchema } from './dropdown/button'
import { DropdownIconPropertiesSchema } from './dropdown/icon'
import { DropdownPropertiesSchema } from './dropdown/index'
import { DropdownListPropertiesSchema } from './dropdown/list'
import { DropdownListItemPropertiesSchema } from './dropdown/list-item'
import { DropdownTextValuePropertiesSchema } from './dropdown/text-value'
import { IconIndicatorPropertiesSchema } from './icon-indicator/index'
import { InputPropertiesSchema as HorizonInputPropertiesSchema } from './input/index'
import { InputFieldPropertiesSchema } from './input-field/index'
import { PanelPropertiesSchema } from './panel/index'
import { ProgressBarPropertiesSchema } from './progress-bar/index'
import { ProgressBarStepperPropertiesSchema } from './progress-bar/stepper'
import { ProgressBarStepperStepPropertiesSchema } from './progress-bar/stepper-step'
import { RadioGroupPropertiesSchema } from './radio-group/index'
import { RadioGroupItemPropertiesSchema } from './radio-group/item'
import { SliderPropertiesSchema } from './slider/index'
import { TogglePropertiesSchema } from './toggle/index'

type PropertySchema = { safeParse: (value: unknown) => unknown }

export type ComponentSchemaName =
  | 'Avatar'
  | 'Badge'
  | 'Button'
  | 'ButtonIcon'
  | 'ButtonLabel'
  | 'ButtonLabelSubtext'
  | 'Checkbox'
  | 'Divider'
  | 'Dropdown'
  | 'DropdownAvatar'
  | 'DropdownButton'
  | 'DropdownIcon'
  | 'DropdownList'
  | 'DropdownListItem'
  | 'DropdownTextValue'
  | 'IconIndicator'
  | 'Input'
  | 'InputField'
  | 'Panel'
  | 'ProgressBar'
  | 'ProgressBarStepper'
  | 'ProgressBarStepperStep'
  | 'RadioGroup'
  | 'RadioGroupItem'
  | 'Slider'
  | 'Toggle'

export const ComponentPropertiesSchemas: Record<ComponentSchemaName, PropertySchema> = /* @__PURE__ */ (() => ({
  Avatar: AvatarPropertiesSchema,
  Badge: BadgePropertiesSchema,
  Button: ButtonPropertiesSchema,
  ButtonIcon: ButtonIconPropertiesSchema,
  ButtonLabel: ButtonLabelPropertiesSchema,
  ButtonLabelSubtext: ButtonLabelSubtextPropertiesSchema,
  Checkbox: CheckboxPropertiesSchema,
  Divider: DividerPropertiesSchema,
  Dropdown: DropdownPropertiesSchema,
  DropdownAvatar: DropdownAvatarPropertiesSchema,
  DropdownButton: DropdownButtonPropertiesSchema,
  DropdownIcon: DropdownIconPropertiesSchema,
  DropdownList: DropdownListPropertiesSchema,
  DropdownListItem: DropdownListItemPropertiesSchema,
  DropdownTextValue: DropdownTextValuePropertiesSchema,
  IconIndicator: IconIndicatorPropertiesSchema,
  Input: HorizonInputPropertiesSchema,
  InputField: InputFieldPropertiesSchema,
  Panel: PanelPropertiesSchema,
  ProgressBar: ProgressBarPropertiesSchema,
  ProgressBarStepper: ProgressBarStepperPropertiesSchema,
  ProgressBarStepperStep: ProgressBarStepperStepPropertiesSchema,
  RadioGroup: RadioGroupPropertiesSchema,
  RadioGroupItem: RadioGroupItemPropertiesSchema,
  Slider: SliderPropertiesSchema,
  Toggle: TogglePropertiesSchema,
}))()

export const componentSchemas = ComponentPropertiesSchemas
