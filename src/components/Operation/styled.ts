import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: ${theme.spacings.xlarge} ${theme.spacings.xsmall};
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    max-width: 1248px;

    margin: 0 auto;
  `}
`
export const TextsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    h2 {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.lines.large};
      text-align: center;
    }

    p {
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.font.lines.small};
      text-align: center;
      max-width: 550px;
      opacity: 0.8;
    }
  `}
`
export const CardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
  `}
`
