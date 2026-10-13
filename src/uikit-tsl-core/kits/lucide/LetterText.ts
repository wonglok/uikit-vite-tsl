
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-letter-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.655 4.035 C 6.240 4.143,5.874 4.438,5.670 4.828 C 5.486 5.182,2.127 12.489,2.055 12.694 C 1.838 13.309,2.338 14.000,3.000 14.000 C 3.242 14.000,3.521 13.881,3.696 13.704 C 3.816 13.581,3.944 13.350,4.205 12.780 L 4.553 12.020 7.001 12.020 L 9.448 12.020 9.794 12.780 C 10.058 13.360,10.178 13.579,10.303 13.704 C 10.479 13.881,10.759 14.000,11.000 14.000 C 11.662 14.000,12.162 13.309,11.945 12.694 C 11.873 12.491,8.515 5.184,8.330 4.828 C 8.072 4.334,7.625 4.043,7.084 4.017 C 6.917 4.009,6.724 4.018,6.655 4.035 M14.695 5.057 C 14.466 5.129,14.256 5.299,14.128 5.516 C 14.037 5.672,14.020 5.746,14.020 6.000 C 14.020 6.256,14.036 6.328,14.131 6.489 C 14.256 6.702,14.449 6.864,14.670 6.943 C 14.891 7.022,21.109 7.022,21.330 6.943 C 21.551 6.864,21.744 6.702,21.869 6.489 C 21.964 6.328,21.980 6.256,21.980 6.000 C 21.980 5.746,21.963 5.672,21.872 5.516 C 21.740 5.293,21.533 5.128,21.290 5.055 C 21.030 4.977,14.945 4.979,14.695 5.057 M7.768 8.370 L 8.508 9.980 7.754 9.991 C 7.339 9.997,6.661 9.997,6.246 9.991 L 5.492 9.980 6.232 8.370 C 6.639 7.485,6.985 6.760,7.000 6.760 C 7.015 6.760,7.361 7.485,7.768 8.370 M14.695 11.057 C 14.466 11.129,14.256 11.299,14.128 11.516 C 14.037 11.672,14.020 11.746,14.020 12.000 C 14.020 12.256,14.036 12.328,14.131 12.489 C 14.256 12.702,14.449 12.864,14.670 12.943 C 14.891 13.022,21.109 13.022,21.330 12.943 C 21.551 12.864,21.744 12.702,21.869 12.489 C 21.964 12.328,21.980 12.256,21.980 12.000 C 21.980 11.746,21.963 11.672,21.872 11.516 C 21.740 11.293,21.533 11.128,21.290 11.055 C 21.030 10.977,14.945 10.979,14.695 11.057 M2.695 17.057 C 2.466 17.129,2.256 17.299,2.128 17.516 C 2.037 17.672,2.020 17.746,2.020 18.000 C 2.020 18.256,2.036 18.328,2.131 18.489 C 2.256 18.702,2.449 18.864,2.670 18.943 C 2.893 19.023,21.107 19.023,21.330 18.943 C 21.551 18.864,21.744 18.702,21.869 18.489 C 21.964 18.328,21.980 18.256,21.980 18.000 C 21.980 17.746,21.963 17.672,21.872 17.516 C 21.740 17.293,21.533 17.128,21.290 17.055 C 21.027 16.976,2.947 16.978,2.695 17.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class LetterTextIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const LetterText = LetterTextIcon
    