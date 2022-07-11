import 'styled-components';
import { MyTheme } from './theme';

declare module 'styled-components' {
  export type DefaultTheme = MyTheme;
}
