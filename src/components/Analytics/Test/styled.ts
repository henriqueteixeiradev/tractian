import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.secondary};
  `}
`
