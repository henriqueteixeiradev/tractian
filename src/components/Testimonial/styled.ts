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

export const CarouselWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-top: ${theme.spacings.large};
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 860px) {
      display: none;
    }

    button {
      background-color: transparent;
      cursor: pointer;

      transition: all 0.2s ease;

      img {
        width: 28px;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}
`

export const CardsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: ${theme.spacings.large};

    width: 100%;

    @media (max-width: 860px) {
      flex-direction: column;
    }
  `}
`
export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 340px;
    height: 445px;

    box-shadow: 5px 5px 25px rgba(55, 65, 81, 0.09),
      inset 0px 0px 4px rgba(55, 65, 81, 0.09);

    position: relative;
  `}
`

export const AutorWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 69px;

    margin-top: ${theme.spacings.xsmall};

    background: linear-gradient(90deg, #73e49a 0%, #1ba049 98.96%);

    padding: 0 ${theme.spacings.xxsmall};

    h3 {
      font-size: ${theme.font.sizes.xsmall};
      line-height: ${theme.font.lines.xsmall};
      width: 170px;
    }

    p {
      font-size: calc(${theme.font.sizes.xsmall} - 0.2rem);
      line-height: calc(${theme.font.lines.xsmall} - 0.2);
      width: 170px;
      opacity: 0.8;
    }
  `}
`
export const DescriptionWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding: ${theme.spacings.small};

    cite {
      font-size: ${theme.font.sizes.xsmall};
      line-height: ${theme.font.lines.xsmall};
      margin: 0 ${theme.spacings.xxsmall};
    }

    img {
      width: 20px;
    }
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    position: absolute;
    top: -${theme.spacings.xsmall};

    left: -${theme.spacings.xsmall};

    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);

    border-radius: 20px;
  `}
`

export const StarsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};

    position: absolute;
    bottom: ${theme.spacings.xsmall};
    right: ${theme.spacings.xsmall};
  `}
`
