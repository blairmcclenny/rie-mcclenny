import { createGlobalStyle } from 'styled-components'
import { colors } from '../../styles/theme'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${colors.text.black};
  }

  b, strong {
    font-weight: 700;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: ${colors.text.black};
  }
`

export default GlobalStyle
