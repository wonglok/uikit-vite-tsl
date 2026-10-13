
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-signal-zero" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.695 19.055 C 1.464 19.130,1.255 19.300,1.128 19.516 C 1.037 19.672,1.020 19.746,1.020 20.000 C 1.020 20.257,1.036 20.327,1.133 20.492 C 1.651 21.374,2.998 21.018,2.998 20.000 C 2.998 19.623,2.792 19.281,2.463 19.112 C 2.265 19.010,1.911 18.984,1.695 19.055 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class SignalZeroIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const SignalZero = SignalZeroIcon
    