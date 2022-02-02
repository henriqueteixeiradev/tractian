import Graphic from 'elements/icons/Graphic'
import React from 'react'

import * as S from './styled'

export const Header = () => {
  return (
    <S.Section>
      <S.Content>
        <S.TextsWrapper>
          <S.HeadlineWrapper>
            <h1>
              Antecipe a manuteção dos seus ativos, evitando paradas na
              produção.
            </h1>
            <p>
              Nosso sistema centraliza informações precisas sobre suas máquinas,
              com insights e análises, como saúde do equipamento, detecção de
              anomalias e variação de espectros.
            </p>
          </S.HeadlineWrapper>
          <S.ListWrapper>
            <S.IconsWrapper>
              <span>
                <img src="/img/icone_manutencao.svg" alt="icone aqui" />
                Manutenção Preventiva
              </span>
              <span>
                <img src="/img/icone_monitoramento.svg" alt="icone aqui" />
                Monitoramento Online
              </span>
            </S.IconsWrapper>
            <S.IconsWrapper>
              <span>
                <img src="/img/icone_setup.svg" alt="icone aqui" />
                Setup Instantâneo
              </span>
              <span>
                <img src="/img/icone_cmms.svg" alt="icone aqui" />
                CMMS Integrado
              </span>
            </S.IconsWrapper>
          </S.ListWrapper>

          <S.ButtonWrapper>
            <a href="#form">Demonstração</a>
          </S.ButtonWrapper>
        </S.TextsWrapper>

        <S.ImageWrapper>
          <Graphic />
        </S.ImageWrapper>
      </S.Content>
    </S.Section>
  )
}
export default Header
