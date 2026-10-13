import { AccordionPropertiesSchema } from './accordion/index'
import { AccordionContentPropertiesSchema } from './accordion/content'
import { AccordionItemPropertiesSchema } from './accordion/item'
import { AccordionTriggerPropertiesSchema } from './accordion/trigger'
import { AccordionTriggerIconPropertiesSchema } from './accordion/trigger-icon'
import { AlertDescriptionPropertiesSchema } from './alert/description'
import { AlertIconPropertiesSchema } from './alert/icon'
import { AlertPropertiesSchema } from './alert/index'
import { AlertTitlePropertiesSchema } from './alert/title'
import { AlertDialogActionPropertiesSchema } from './alert-dialog/action'
import { AlertDialogCancelPropertiesSchema } from './alert-dialog/cancel'
import { AlertDialogContentPropertiesSchema } from './alert-dialog/content'
import { AlertDialogDescriptionPropertiesSchema } from './alert-dialog/description'
import { AlertDialogFooterPropertiesSchema } from './alert-dialog/footer'
import { AlertDialogHeaderPropertiesSchema } from './alert-dialog/header'
import { AlertDialogPropertiesSchema } from './alert-dialog/index'
import { AlertDialogTitlePropertiesSchema } from './alert-dialog/title'
import { AlertDialogTriggerPropertiesSchema } from './alert-dialog/trigger'
import { AvatarPropertiesSchema } from './avatar/index'
import { BadgePropertiesSchema } from './badge/index'
import { ButtonPropertiesSchema } from './button/index'
import { CardPropertiesSchema } from './card/index'
import { CardContentPropertiesSchema } from './card/content'
import { CardDescriptionPropertiesSchema } from './card/description'
import { CardFooterPropertiesSchema } from './card/footer'
import { CardHeaderPropertiesSchema } from './card/header'
import { CardTitlePropertiesSchema } from './card/title'
import { CheckboxPropertiesSchema } from './checkbox/index'
import { DialogContentPropertiesSchema } from './dialog/content'
import { DialogDescriptionPropertiesSchema } from './dialog/description'
import { DialogFooterPropertiesSchema } from './dialog/footer'
import { DialogHeaderPropertiesSchema } from './dialog/header'
import { DialogPropertiesSchema } from './dialog/index'
import { DialogTitlePropertiesSchema } from './dialog/title'
import { DialogTriggerPropertiesSchema } from './dialog/trigger'
import { InputPropertiesSchema as DefaultInputPropertiesSchema } from './input/index'
import { LabelPropertiesSchema } from './label/index'
import { MenubarPropertiesSchema } from './menubar/index'
import { MenubarMenuPropertiesSchema } from './menubar/menu'
import { MenubarTriggerPropertiesSchema } from './menubar/trigger'
import { PaginationPropertiesSchema } from './pagination/index'
import { PaginationContentPropertiesSchema } from './pagination/content'
import { PaginationEllipsisPropertiesSchema } from './pagination/ellipsis'
import { PaginationItemPropertiesSchema } from './pagination/item'
import { PaginationLinkPropertiesSchema } from './pagination/link'
import { PaginationNextPropertiesSchema } from './pagination/next'
import { PaginationPreviousPropertiesSchema } from './pagination/previous'
import { ProgressPropertiesSchema } from './progress/index'
import { RadioGroupPropertiesSchema } from './radio-group/index'
import { RadioGroupItemPropertiesSchema } from './radio-group/item'
import { SeparatorPropertiesSchema } from './separator/index'
import { SkeletonPropertiesSchema } from './skeleton/index'
import { SliderPropertiesSchema } from './slider/index'
import { SwitchPropertiesSchema } from './switch/index'
import { TabsPropertiesSchema } from './tabs/index'
import { TabsContentPropertiesSchema } from './tabs/content'
import { TabsListPropertiesSchema } from './tabs/list'
import { TabsTriggerPropertiesSchema } from './tabs/trigger'
import { TextareaPropertiesSchema as DefaultTextareaPropertiesSchema } from './textarea/index'
import { TogglePropertiesSchema } from './toggle/index'
import { ToggleGroupPropertiesSchema } from './toggle-group/index'
import { ToggleGroupItemPropertiesSchema } from './toggle-group/item'
import { TooltipPropertiesSchema } from './tooltip/index'
import { TooltipContentPropertiesSchema } from './tooltip/content'
import { TooltipTriggerPropertiesSchema } from './tooltip/trigger'
import { VideoControlsPropertiesSchema, VideoPropertiesSchema as DefaultVideoPropertiesSchema } from './video/index'

type PropertySchema = { safeParse: (value: unknown) => unknown }

export type ComponentSchemaName =
  | 'Accordion'
  | 'AccordionContent'
  | 'AccordionItem'
  | 'AccordionTrigger'
  | 'AccordionTriggerIcon'
  | 'Alert'
  | 'AlertDescription'
  | 'AlertIcon'
  | 'AlertTitle'
  | 'AlertDialog'
  | 'AlertDialogAction'
  | 'AlertDialogCancel'
  | 'AlertDialogContent'
  | 'AlertDialogDescription'
  | 'AlertDialogFooter'
  | 'AlertDialogHeader'
  | 'AlertDialogTitle'
  | 'AlertDialogTrigger'
  | 'Avatar'
  | 'Badge'
  | 'Button'
  | 'Card'
  | 'CardContent'
  | 'CardDescription'
  | 'CardFooter'
  | 'CardHeader'
  | 'CardTitle'
  | 'Checkbox'
  | 'Dialog'
  | 'DialogContent'
  | 'DialogDescription'
  | 'DialogFooter'
  | 'DialogHeader'
  | 'DialogTitle'
  | 'DialogTrigger'
  | 'Input'
  | 'Label'
  | 'Menubar'
  | 'MenubarMenu'
  | 'MenubarTrigger'
  | 'Pagination'
  | 'PaginationContent'
  | 'PaginationEllipsis'
  | 'PaginationItem'
  | 'PaginationLink'
  | 'PaginationNext'
  | 'PaginationPrevious'
  | 'Progress'
  | 'RadioGroup'
  | 'RadioGroupItem'
  | 'Separator'
  | 'Skeleton'
  | 'Slider'
  | 'Switch'
  | 'Tabs'
  | 'TabsContent'
  | 'TabsList'
  | 'TabsTrigger'
  | 'Textarea'
  | 'Toggle'
  | 'ToggleGroup'
  | 'ToggleGroupItem'
  | 'Tooltip'
  | 'TooltipContent'
  | 'TooltipTrigger'
  | 'Video'
  | 'VideoControls'

export const ComponentPropertiesSchemas: Record<ComponentSchemaName, PropertySchema> = /* @__PURE__ */ (() => ({
  Accordion: AccordionPropertiesSchema,
  AccordionContent: AccordionContentPropertiesSchema,
  AccordionItem: AccordionItemPropertiesSchema,
  AccordionTrigger: AccordionTriggerPropertiesSchema,
  AccordionTriggerIcon: AccordionTriggerIconPropertiesSchema,
  Alert: AlertPropertiesSchema,
  AlertDescription: AlertDescriptionPropertiesSchema,
  AlertIcon: AlertIconPropertiesSchema,
  AlertTitle: AlertTitlePropertiesSchema,
  AlertDialog: AlertDialogPropertiesSchema,
  AlertDialogAction: AlertDialogActionPropertiesSchema,
  AlertDialogCancel: AlertDialogCancelPropertiesSchema,
  AlertDialogContent: AlertDialogContentPropertiesSchema,
  AlertDialogDescription: AlertDialogDescriptionPropertiesSchema,
  AlertDialogFooter: AlertDialogFooterPropertiesSchema,
  AlertDialogHeader: AlertDialogHeaderPropertiesSchema,
  AlertDialogTitle: AlertDialogTitlePropertiesSchema,
  AlertDialogTrigger: AlertDialogTriggerPropertiesSchema,
  Avatar: AvatarPropertiesSchema,
  Badge: BadgePropertiesSchema,
  Button: ButtonPropertiesSchema,
  Card: CardPropertiesSchema,
  CardContent: CardContentPropertiesSchema,
  CardDescription: CardDescriptionPropertiesSchema,
  CardFooter: CardFooterPropertiesSchema,
  CardHeader: CardHeaderPropertiesSchema,
  CardTitle: CardTitlePropertiesSchema,
  Checkbox: CheckboxPropertiesSchema,
  Dialog: DialogPropertiesSchema,
  DialogContent: DialogContentPropertiesSchema,
  DialogDescription: DialogDescriptionPropertiesSchema,
  DialogFooter: DialogFooterPropertiesSchema,
  DialogHeader: DialogHeaderPropertiesSchema,
  DialogTitle: DialogTitlePropertiesSchema,
  DialogTrigger: DialogTriggerPropertiesSchema,
  Input: DefaultInputPropertiesSchema,
  Label: LabelPropertiesSchema,
  Menubar: MenubarPropertiesSchema,
  MenubarMenu: MenubarMenuPropertiesSchema,
  MenubarTrigger: MenubarTriggerPropertiesSchema,
  Pagination: PaginationPropertiesSchema,
  PaginationContent: PaginationContentPropertiesSchema,
  PaginationEllipsis: PaginationEllipsisPropertiesSchema,
  PaginationItem: PaginationItemPropertiesSchema,
  PaginationLink: PaginationLinkPropertiesSchema,
  PaginationNext: PaginationNextPropertiesSchema,
  PaginationPrevious: PaginationPreviousPropertiesSchema,
  Progress: ProgressPropertiesSchema,
  RadioGroup: RadioGroupPropertiesSchema,
  RadioGroupItem: RadioGroupItemPropertiesSchema,
  Separator: SeparatorPropertiesSchema,
  Skeleton: SkeletonPropertiesSchema,
  Slider: SliderPropertiesSchema,
  Switch: SwitchPropertiesSchema,
  Tabs: TabsPropertiesSchema,
  TabsContent: TabsContentPropertiesSchema,
  TabsList: TabsListPropertiesSchema,
  TabsTrigger: TabsTriggerPropertiesSchema,
  Textarea: DefaultTextareaPropertiesSchema,
  Toggle: TogglePropertiesSchema,
  ToggleGroup: ToggleGroupPropertiesSchema,
  ToggleGroupItem: ToggleGroupItemPropertiesSchema,
  Tooltip: TooltipPropertiesSchema,
  TooltipContent: TooltipContentPropertiesSchema,
  TooltipTrigger: TooltipTriggerPropertiesSchema,
  Video: DefaultVideoPropertiesSchema,
  VideoControls: VideoControlsPropertiesSchema,
}))()

export const componentSchemas = ComponentPropertiesSchemas
