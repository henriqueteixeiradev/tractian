import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: ${theme.spacings.xsmall};

    background: linear-gradient(264.79deg, #2563eb -2.37%, #1e3a8a 100.51%);
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1248px;

    margin: 0 auto;

    color: ${theme.colors.white};

    font-size: calc(${theme.font.sizes.xsmall} - 0.3rem);
  `}
`
