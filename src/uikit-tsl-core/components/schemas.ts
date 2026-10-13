import { ContainerPropertiesSchema } from './container'
import { ContentPropertiesSchema } from './content'
import { CustomPropertiesSchema } from './custom'
import { FullscreenPropertiesSchema } from './fullscreen'
import { ImagePropertiesSchema } from './image'
import { InputPropertiesSchema } from './input'
import { SvgPropertiesSchema } from './svg'
import { TextPropertiesSchema } from './text'
import { TextareaPropertiesSchema } from './textarea'
import { VideoPropertiesSchema } from './video'

export const ComponentPropertiesSchemas = /* @__PURE__ */ (() =>
  ({
    Container: ContainerPropertiesSchema,
    Content: ContentPropertiesSchema,
    Custom: CustomPropertiesSchema,
    Fullscreen: FullscreenPropertiesSchema,
    Image: ImagePropertiesSchema,
    Input: InputPropertiesSchema,
    Svg: SvgPropertiesSchema,
    Text: TextPropertiesSchema,
    Textarea: TextareaPropertiesSchema,
    Video: VideoPropertiesSchema,
  }) as const)()

export const componentSchemas = ComponentPropertiesSchemas

export type ComponentSchemaName = keyof typeof ComponentPropertiesSchemas
