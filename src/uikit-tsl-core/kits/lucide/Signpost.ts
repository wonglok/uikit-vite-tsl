
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-signpost" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.695 2.057 C 11.466 2.129,11.256 2.299,11.128 2.516 L 11.020 2.700 11.008 3.848 L 10.996 4.996 8.228 5.010 C 5.482 5.023,5.458 5.024,5.160 5.114 C 4.831 5.214,4.428 5.420,4.181 5.615 C 3.944 5.802,1.560 8.102,1.412 8.286 C 0.869 8.963,0.869 10.037,1.412 10.714 C 1.560 10.898,3.944 13.198,4.181 13.385 C 4.411 13.567,4.818 13.779,5.140 13.886 L 5.420 13.979 8.209 13.991 L 10.998 14.004 11.009 17.655 L 11.020 21.306 11.141 21.503 C 11.543 22.156,12.457 22.156,12.859 21.503 L 12.980 21.306 12.991 17.655 L 13.002 14.004 15.791 13.991 L 18.580 13.979 18.860 13.886 C 19.200 13.773,19.597 13.562,19.840 13.366 C 20.069 13.181,22.191 11.148,22.469 10.847 C 23.028 10.244,23.157 9.362,22.796 8.613 C 22.663 8.337,22.515 8.179,21.186 6.902 C 19.688 5.463,19.493 5.314,18.834 5.113 C 18.543 5.024,18.508 5.023,15.772 5.010 L 13.004 4.996 12.992 3.848 L 12.980 2.700 12.872 2.516 C 12.628 2.101,12.150 1.915,11.695 2.057 M18.337 7.065 C 18.495 7.119,18.677 7.273,19.369 7.935 C 19.830 8.378,20.388 8.911,20.608 9.120 L 21.007 9.500 19.839 10.619 C 18.571 11.834,18.493 11.902,18.282 11.960 C 18.088 12.014,5.912 12.014,5.718 11.960 C 5.507 11.902,5.429 11.834,4.161 10.619 L 2.993 9.500 3.392 9.120 C 3.612 8.911,4.170 8.378,4.632 7.935 C 5.275 7.318,5.513 7.115,5.646 7.068 C 5.799 7.014,6.548 7.006,11.983 7.003 C 17.584 7.000,18.163 7.006,18.337 7.065 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class SignpostIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const Signpost = SignpostIcon
    