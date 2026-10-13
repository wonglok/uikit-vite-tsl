
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-house" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.490 1.044 C 11.161 1.099,10.805 1.230,10.504 1.408 C 10.332 1.509,8.853 2.749,6.604 4.677 C 4.611 6.386,2.910 7.855,2.824 7.942 C 2.621 8.148,2.355 8.558,2.227 8.862 C 1.991 9.425,1.996 9.280,2.009 14.660 L 2.020 19.580 2.114 19.860 C 2.446 20.851,3.184 21.582,4.160 21.886 L 4.460 21.980 12.000 21.980 L 19.540 21.980 19.840 21.886 C 20.816 21.582,21.554 20.851,21.886 19.860 L 21.980 19.580 21.991 14.660 C 22.004 9.293,22.010 9.453,21.776 8.878 C 21.649 8.566,21.386 8.156,21.176 7.942 C 20.848 7.608,13.721 1.533,13.509 1.407 C 12.946 1.071,12.169 0.931,11.490 1.044 M12.425 3.092 C 12.492 3.127,14.178 4.553,16.172 6.262 C 19.266 8.913,19.810 9.395,19.888 9.554 L 19.980 9.740 19.992 14.380 C 20.001 17.644,19.992 19.081,19.961 19.224 C 19.905 19.484,19.724 19.731,19.486 19.871 L 19.300 19.980 17.650 19.992 L 16.000 20.003 15.999 16.392 C 15.999 12.482,16.000 12.515,15.781 12.083 C 15.646 11.816,15.297 11.449,15.017 11.281 C 14.564 11.008,14.524 11.005,12.000 11.005 C 9.476 11.005,9.436 11.008,8.983 11.281 C 8.703 11.449,8.354 11.816,8.219 12.083 C 7.995 12.523,8.000 12.434,8.000 16.370 L 8.000 20.003 6.350 19.992 L 4.700 19.980 4.516 19.872 C 4.415 19.813,4.283 19.700,4.224 19.621 C 3.987 19.312,3.998 19.561,4.009 14.439 L 4.020 9.740 4.111 9.554 C 4.189 9.396,4.733 8.914,7.789 6.294 C 9.761 4.603,11.410 3.194,11.454 3.163 C 11.691 2.994,12.167 2.959,12.425 3.092 M14.000 16.500 L 14.000 20.000 12.000 20.000 L 10.000 20.000 10.000 16.500 L 10.000 13.000 12.000 13.000 L 14.000 13.000 14.000 16.500 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class HouseIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const House = HouseIcon
    