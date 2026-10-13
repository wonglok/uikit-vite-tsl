
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.695 2.057 C 5.466 2.129,5.256 2.299,5.128 2.516 L 5.020 2.700 5.010 11.919 C 4.998 22.269,4.972 21.374,5.298 21.700 C 5.565 21.967,5.982 22.067,6.320 21.946 C 6.397 21.919,9.661 19.838,13.574 17.323 C 21.150 12.452,20.860 12.650,20.964 12.264 C 21.059 11.911,20.918 11.459,20.647 11.247 C 20.341 11.009,6.453 2.107,6.305 2.055 C 6.116 1.988,5.914 1.989,5.695 2.057 M12.674 8.480 C 15.669 10.405,18.119 11.989,18.119 12.000 C 18.120 12.016,7.265 19.014,7.056 19.132 C 7.008 19.159,7.000 18.150,7.000 11.998 L 7.000 4.832 7.115 4.906 C 7.178 4.947,9.680 6.555,12.674 8.480 " stroke="none" fill="black" fill-rule="evenodd"></path></svg>`;
      export class PlayIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
        constructor(
          inputProperties?: InProperties<OutProperties>,
          initialClasses?: Array<SvgProperties | string>,
          config?: {
            renderContext?: RenderContext
            defaultOverrides?: InProperties<OutProperties>
            defaults?: WithSignal<OutProperties>
          },
        ) {
          super(inputProperties, initialClasses, {
            ...config,
            defaultOverrides: {
              content,
              width: 24,
              height: 24,
              ...config?.defaultOverrides
            } as InProperties<OutProperties>,
          })
        }
      }
      export const Play = PlayIcon
    