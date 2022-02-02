import React from 'react'

import * as S from './styled'

export const Subscribe = () => {
  return (
    <S.Section>
      <S.Content>
        <S.TextsAreaLeftWrapper>
          <h2>
            Nomeada solução favorita de CMMS e OEE no ranking da Capterra 2021
          </h2>
        </S.TextsAreaLeftWrapper>

        <S.SubscribeWrapper>
          <S.TextsWrapper>
            <h3>Melhore os seus processos de manutenção</h3>
            <p>Preencha o formulário para uma demonstração.</p>
          </S.TextsWrapper>
          <S.LogoWrapper id="form">
            <img src="/img/logo.svg" alt="Logo" />
          </S.LogoWrapper>
          <S.Form>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Cargo" />
            <input type="text" placeholder="Telefone" />
            <input type="text" placeholder="Email" />

            <S.RadioWrapper>
              <b>O que mais te interessou nas nossas soluções?</b>
              <ul>
                <li>
                  <input
                    type="radio"
                    value="Continuar Sem Opção"
                    name="gender"
                  />
                  Monitoramento Online e Sensores
                </li>
                <li>
                  <input
                    type="radio"
                    value="Continuar Sem Opção"
                    name="gender"
                  />
                  Software de Gestão da Manutenção e PCM
                </li>
                <li>
                  <input
                    type="radio"
                    value="Continuar Sem Opção"
                    name="gender"
                  />
                  Todas as Soluções
                </li>
              </ul>
            </S.RadioWrapper>

            <S.ButtonWrapper>
              <a href="">Demonstração</a>
            </S.ButtonWrapper>
          </S.Form>
        </S.SubscribeWrapper>
      </S.Content>
    </S.Section>
  )
}
export default Subscribe
