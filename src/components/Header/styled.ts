import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: ${theme.spacings.xlarge} ${theme.spacings.xsmall};

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

    gap: ${theme.spacings.xxsmall};

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `}
`
export const TextsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }
  `}
`
export const HeadlineWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: ${theme.spacings.small};

    h1 {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.lines.large};
      color: ${theme.colors.white};

      @media (max-width: 550px) {
        font-size: calc(${theme.font.sizes.large} - 1rem);
      }
    }

    p {
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.font.lines.small};
      color: ${theme.colors.white};
      opacity: 0.8;
      margin-bottom: ${theme.spacings.small};
    }
  `}
`
export const ListWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    @media (max-width: 450px) {
      flex-direction: column;
      padding: ${theme.spacings.small} 0;
    }

    gap: ${theme.spacings.small};

    @media (max-width: 450px) {
      gap: ${theme.spacings.xxsmall};
    }

    width: 100%;
  `}
`
export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: ${theme.spacings.xxsmall};

    span {
      display: flex;
      align-items: center;
      gap: ${theme.spacings.xxsmall};
      color: ${theme.colors.white};

      img {
        width: 18px;
      }
    }
  `}
`
export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    max-width: 50%;
    margin-top: ${theme.spacings.small};

    @media (max-width: 500px) {
      max-width: 100%;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

      background-color: ${theme.colors.secondary};

      border-radius: 100px;

      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      font-weight: 700;
      text-transform: uppercase;

      &:hover {
        background-color: ${theme.colors.senary};
      }
    }
  `}
`
export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
      align-items: center;

      svg {
        width: 100%;
      }
    }
  `}
`
