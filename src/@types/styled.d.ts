import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
// Este arquivo estende os tipos padrão do pacote ‘styled-components’ com o seu próprio tema personalizado.
// Desta forma é possível utilizar "theme.color"
