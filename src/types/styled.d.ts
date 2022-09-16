import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      white: string
      gray: string
      darkGray: string
    }

    fonts: {
      lora: string
      montserrat: string
    }
  }
}
