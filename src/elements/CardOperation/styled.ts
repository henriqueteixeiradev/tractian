import styled, { css } from 'styled-components'

interface CardProps {
  bg_color: string
}

export const Card = styled.div<CardProps>`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;

    border-radius: 20px;

    position: relative;

    margin-top: ${theme.spacings.xxlarge};

    @media (max-width: 1024px) {
      margin-top: ${theme.spacings.xlarge};
    }

    @media (max-width: 860px) {
      flex-direction: column;
    }

    @media (max-width: 550px) {
      margin-top: ${theme.spacings.large};
    }
  `}
  background: ${(props) => props.bg_color};
`
export const InfoLeftWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: ${theme.spacings.xsmall};

    width: 50%;

    padding: ${theme.spacings.xsmall};

    @media (max-width: 860px) {
      width: 100%;
    }
  `}
`
export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    gap: ${theme.spacings.xsmall};

    @media (max-width: 550px) {
      flex-direction: column;
    }
  `}
`
export const TextsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;

    h3 {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.lines.medium};

      @media (max-width: 550px) {
        text-align: center;
      }
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
      line-height: ${theme.font.lines.xsmall};
      opacity: 0.8;

      @media (max-width: 550px) {
        text-align: center;
      }
    }
  `}
`
export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;

    position: absolute;
    top: -100px;
    right: 0;

    @media (max-width: 1100px) {
      position: initial;
    }

    @media (max-width: 860px) {
      width: 100%;
    }
  `}
`
