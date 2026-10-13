
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Video as VanillaVideo, VideoProperties as VanillaVideoProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Video as VanillaVideo } from '../../core/index'

export type VideoProperties = VanillaVideoProperties & ClassListProperties

export const Video: ForwardRefExoticComponent<
  PropsWithoutRef<VideoProperties> & RefAttributes<VanillaVideo>
> = /* @__PURE__ */ build<VanillaVideo, VideoProperties>(VanillaVideo, "VanillaDefaultVideo")
    
