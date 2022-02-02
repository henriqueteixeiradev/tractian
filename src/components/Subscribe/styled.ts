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

    width: 100%;
    max-width: 1248px;

    margin: 0 auto;

    background: linear-gradient(90deg, #22d3ee 0%, #2563eb 98.96%);
    border-radius: 20px;
  `}
`
export const TextsAreaLeftWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 60%;

    border-right: 15px solid ${theme.colors.white};

    padding: ${theme.spacings.xlarge};

    h2 {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.lines.large};
      color: ${theme.colors.white};
    }

    @media (max-width: 800px) {
      display: none;
    }
  `}
`

export const SubscribeWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: ${theme.spacings.large};

    padding: ${theme.spacings.small};

    width: 40%;

    @media (max-width: 800px) {
      width: 100%;
    }
  `}
`
export const TextsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    h3 {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.lines.large};
      color: ${theme.colors.white};
    }
    p {
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.font.lines.small};
      color: ${theme.colors.white};
      opacity: 0.8;
    }
  `}
`
export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    transform: translateX(-40vw);

    @media (max-width: 900px) {
      transform: translateX(0);
      img {
        width: 100%;
      }
    }
  `}
`
export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: ${theme.spacings.xxsmall};

    input {
      background: transparent;
      border-bottom: 2px solid #1ba049;
      outline: none;

      color: ${theme.colors.white};

      padding: ${theme.spacings.xxsmall} 0;

      ::-webkit-input-placeholder {
        color: ${theme.colors.white};
      }
      input:-moz-placeholder {
        color: ${theme.colors.white};
      }
      textarea:-moz-placeholder {
        color: ${theme.colors.white};
      }
    }
  `}
`
export const RadioWrapper = styled.form`
  ${({ theme }) => css`
    b {
      color: ${theme.colors.white};
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.xxsmall};

      margin-top: ${theme.spacings.xxsmall};

      li {
        display: flex;

        align-items: center;
        width: 100%;
        color: ${theme.colors.white};
        input[type='radio'] {
          font-size: 100%;
          line-height: inherit;
          color: white;
          margin: 0;
          padding: 0;
          margin-right: ${theme.spacings.xxsmall};
        }
      }
    }
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.small};

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
