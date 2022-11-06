import {FlattenSimpleInterpolation} from 'styled-components';

type Color = string;
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<string, Color>;
    backgroundColors: Record<string, Color>;
    text: Record<string, FlattenSimpleInterpolation>;
  }
}
