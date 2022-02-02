import styled, { css, keyframes } from 'styled-components'

const animateFaq = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

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

    gap: ${theme.spacings.xxsmall};
  `}
`
export const TextsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    margin-bottom: ${theme.spacings.large};

    h2 {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.lines.large};
      text-align: center;
    }

    p {
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.font.lines.small};
      text-align: center;
      opacity: 0.8;
    }
  `}
`

export const FaqWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 550px;
    margin: 0 auto;
  `}
`

export const Question = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    background: #22c55e;
    border-radius: 6px;

    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    h3 {
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.font.lines.small};
      color: ${theme.colors.white};
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;

      cursor: pointer;

      img {
        width: 18px;
      }
    }
  `}
`

export const Answer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    background: ${theme.colors.white};
    border-radius: 6px;

    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    margin-top: ${theme.spacings.xxsmall};
    overflow: hidden;

    transition: animation 0.2s ease;

    animation: ${animateFaq} 300ms linear;

    p {
      font-size: ${theme.font.sizes.xsmall};
      line-height: ${theme.font.lines.xsmall};
      opacity: 0.8;
    }
  `}
`
