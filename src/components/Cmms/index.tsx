import React, { useState } from 'react'
import Image from 'next/image'

import * as S from './styled'

import { cmms } from 'mock/cmms'

export const Cmms = () => {
  const [searchCmms, setSearchCmms] = useState(0)

  return (
    <S.Section>
      <S.Content>
        <S.InfoLeftWrapper>
          <S.TitleWrapper>
            <b>Manutenção Preditiva</b>
            <h2>
              O CMMS revolucionário para planejar, acompanhar métricas e
              conectar-se com sua equipe.
            </h2>
          </S.TitleWrapper>

          <S.InfoWrapper>
            <S.TextsWapper>
              <h3>{cmms[searchCmms].title}</h3>
              <p>{cmms[searchCmms].description}</p>
            </S.TextsWapper>

            <S.ImageMobileWrapper>
              <Image
                src={cmms[searchCmms].img}
                alt="Imagem"
                width={538}
                height={527}
                quality={100}
              />
            </S.ImageMobileWrapper>

            <S.ButtonsWrapper>
              <button onClick={() => setSearchCmms(0)}>
                <img src="/img/icone_botao_1.svg" alt="Ícone" />
                <span
                  style={{
                    backgroundColor: `${
                      searchCmms == 0 ? '#22C55E' : '#7B7373'
                    }`
                  }}
                />
              </button>
              <button onClick={() => setSearchCmms(1)}>
                <img src="/img/icone_botao_2.svg" alt="Ícone" />
                <span
                  style={{
                    backgroundColor: `${
                      searchCmms == 1 ? '#22C55E' : '#7B7373'
                    }`
                  }}
                />
              </button>
              <button onClick={() => setSearchCmms(2)}>
                <img src="/img/icone_botao_3.svg" alt="Ícone" />
                <span
                  style={{
                    backgroundColor: `${
                      searchCmms == 2 ? '#22C55E' : '#7B7373'
                    }`
                  }}
                />
              </button>
            </S.ButtonsWrapper>
          </S.InfoWrapper>
        </S.InfoLeftWrapper>

        <S.ImageWrapper>
          <Image
            src={cmms[searchCmms].img}
            alt="Imagem"
            width={538}
            height={527}
            quality={100}
          />
        </S.ImageWrapper>
      </S.Content>
    </S.Section>
  )
}
export default Cmms
