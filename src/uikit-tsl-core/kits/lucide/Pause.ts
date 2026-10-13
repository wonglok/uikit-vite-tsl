
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-pause" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.477 3.073 C 5.806 3.249,5.238 3.823,5.060 4.508 C 5.008 4.707,5.000 5.691,5.000 12.000 C 5.000 19.922,4.987 19.460,5.225 19.930 C 5.361 20.199,5.801 20.639,6.070 20.775 C 6.479 20.982,6.632 21.000,8.000 21.000 C 9.368 21.000,9.521 20.982,9.930 20.775 C 10.196 20.640,10.638 20.200,10.771 19.937 C 11.014 19.459,11.000 19.929,10.999 12.014 C 10.999 4.156,11.009 4.532,10.781 4.083 C 10.551 3.628,10.022 3.203,9.523 3.073 C 9.134 2.972,6.866 2.972,6.477 3.073 M14.477 3.073 C 13.806 3.249,13.238 3.823,13.060 4.508 C 13.008 4.707,13.000 5.691,13.000 12.000 C 13.000 19.922,12.987 19.460,13.225 19.930 C 13.361 20.199,13.801 20.639,14.070 20.775 C 14.479 20.982,14.632 21.000,16.000 21.000 C 17.368 21.000,17.521 20.982,17.930 20.775 C 18.196 20.640,18.638 20.200,18.771 19.937 C 19.014 19.459,19.000 19.929,18.999 12.014 C 18.999 4.156,19.009 4.532,18.781 4.083 C 18.551 3.628,18.022 3.203,17.523 3.073 C 17.134 2.972,14.866 2.972,14.477 3.073 M9.000 12.000 L 9.000 19.000 8.000 19.000 L 7.000 19.000 7.000 12.000 L 7.000 5.000 8.000 5.000 L 9.000 5.000 9.000 12.000 M17.000 12.000 L 17.000 19.000 16.000 19.000 L 15.000 19.000 15.000 12.000 L 15.000 5.000 16.000 5.000 L 17.000 5.000 17.000 12.000 " stroke="none" fill="black" fill-rule="evenodd"></path></svg>`;
      export class PauseIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const Pause = PauseIcon
    