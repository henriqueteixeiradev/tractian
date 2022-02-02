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
    flex-direction: column;
    justify-content: center;

    align-items: center;

    width: 100%;
    max-width: 1248px;

    margin: 0 auto;
  `}
`
export const TextsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

    gap: ${theme.spacings.small};

    h2 {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.lines.large};
      max-width: 90%;
      text-align: center;

      @media (max-width: 550px) {
        font-size: calc(${theme.font.sizes.large} - 1rem);
        max-width: 100%;
      }
    }

    p {
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.font.lines.small};
      max-width: 90%;
      text-align: center;
      opacity: 0.8;
    }
  `}
`

export const CardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    gap: ${theme.spacings.small};

    width: 100%;

    padding-top: ${theme.spacings.large};
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 246px;
    height: 296px;

    gap: ${theme.spacings.xsmall};

    border-radius: 20px;

    padding: ${theme.spacings.small};

    @media (max-width: 550px) {
      width: 90%;
    }

    @media (max-width: 768px) {
      box-shadow: 5px 5px 25px rgba(55, 65, 81, 0.08),
        inset 0px 0px 4px rgba(55, 65, 81, 0.08);
    }

    &:hover {
      box-shadow: 5px 5px 25px rgba(55, 65, 81, 0.08),
        inset 0px 0px 4px rgba(55, 65, 81, 0.08);
    }

    img {
      width: 48px;
    }

    h3 {
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.font.lines.small};
    }
  `}
`
