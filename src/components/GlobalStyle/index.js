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

  ul, ol {
    padding-left: 0;
  }

  .embed-responsive {
    position: relative;
    display: block;
    height: 0;
    padding: 0;
    overflow: hidden;
  }

  .embed-responsive .embed-responsive-item,
  .embed-responsive iframe,
  .embed-responsive embed,
  .embed-responsive object,
  .embed-responsive video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    border: 0;
  }

  .embed-responsive-youtube {
    padding-bottom: 56.25%;
  }

  .hidden {
    display: none;
  }
`

export default GlobalStyle
