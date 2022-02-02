import React from 'react'

import * as S from './styled'

import { benedits } from 'mock/benefits'

export const Benefits = () => {
  return (
    <S.Section>
      <S.Content>
        <S.TextsWrapper>
          <h2>
            A solução mais completa para garantir o bom funcionamento do seu
            patrimônio.
          </h2>
          <p>
            Ocupamos o 68º lugar entre as 500 empresas de SaaS (Software as a
            Service) com crescimento mais rápido em todo o mundo!
          </p>
        </S.TextsWrapper>

        <S.CardWrapper>
          {benedits.map((item) => (
            <S.Card key={item.title}>
              <img src={item.icon} alt="icone" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </S.Card>
          ))}
        </S.CardWrapper>
      </S.Content>
    </S.Section>
  )
}
export default Benefits
