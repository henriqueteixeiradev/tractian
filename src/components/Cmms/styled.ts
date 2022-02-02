import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: ${theme.spacings.xlarge} ${theme.spacings.xsmall};

    background-image: url('/img/bg_cmms.svg');
    background-position: bottom left;
    background-repeat: no-repeat;
    background-size: cover 100%;
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: flex-end;

    width: 100%;
    max-width: 1248px;

    margin: 0 auto;
  `}
`
export const InfoLeftWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }
  `}
`
export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: ${theme.spacings.xsmall};

    margin-bottom: ${theme.spacings.large};

    b {
      font-size: ${theme.font.sizes.xsmall};
      line-height: ${theme.font.lines.xsmall};

      @media (max-width: 1112px) {
      }
    }

    h2 {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.lines.large};

      @media (max-width: 1112px) {
        font-size: calc(${theme.font.sizes.large} - 1rem);
      }
    }
  `}
`

export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    align-items: flex-end;

    gap: ${theme.spacings.small};

    padding-top: ${theme.spacings.medium};
  `}
`

export const TextsWapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    max-width: 550px;

    gap: ${theme.spacings.xxsmall};

    h3 {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.lines.medium};
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
      line-height: ${theme.font.lines.xsmall};

      opacity: 0.8;
    }
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};

    @media (max-width: 768px) {
      justify-content: center;
      align-items: center;

      width: 100%;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      background-color: transparent;

      gap: ${theme.spacings.xxsmall};

      cursor: pointer;

      img {
        width: 100%;
      }

      span {
        width: 15px;
        height: 15px;
        border-radius: 100px;
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

    @media (max-width: 768px) {
      display: none;
    }
  `}
`

export const ImageMobileWrapper = styled.div`
  ${({ theme }) => css`
    display: none;
    justify-content: center;
    align-items: center;

    width: 50%;

    @media (max-width: 768px) {
      display: flex;
    }

    @media (max-width: 600px) {
      width: 60%;
    }
    @media (max-width: 495px) {
      width: 70%;
    }
  `}
`
