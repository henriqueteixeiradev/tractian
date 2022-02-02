import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  ${({ theme }) => css`
    html {
      font-family: 'Poppins', sans-serif;
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      background-color: ${theme.colors.mainBg};
      color: ${theme.colors.texts};
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export default GlobalStyle
