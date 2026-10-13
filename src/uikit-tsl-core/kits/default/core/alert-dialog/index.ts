import type { z } from 'zod'
import { Dialog, DialogProperties, DialogPropertiesSchema } from '../dialog/index'
export const AlertDialogPropertiesSchema = DialogPropertiesSchema

export type AlertDialogProperties = z.input<typeof AlertDialogPropertiesSchema>

export class AlertDialog extends Dialog {}

export * from './trigger'
export * from './content'
export * from './header'
export * from './footer'
export * from './title'
export * from './description'
export * from './action'
export * from './cancel'
