import React, { useState } from 'react'

import * as S from './styled'

import { faq } from 'mock/Faq'

export const Faq = () => {
  const [showQuestion, setShowQuestion] = useState('0')

  return (
    <S.Section>
      <S.Content>
        <S.TextsWrapper>
          <h2>Perguntas Frequêntes</h2>
          <p>Tire suas dúvidas</p>
        </S.TextsWrapper>
        {faq.map((item, i) => (
          <S.FaqWrapper key={i}>
            <S.Question>
              <h3>{item.question}</h3>

              {showQuestion === item.id ? (
                <button onClick={() => setShowQuestion('0')}>
                  <img src="/img/arrow_up.svg" alt="Ícone" />
                </button>
              ) : (
                <button onClick={() => setShowQuestion(item.id)}>
                  <img src="/img/arrow_down.svg" alt="Ícone" />
                </button>
              )}
            </S.Question>

            <S.Answer
              style={{
                display: `${showQuestion === item.id ? 'flex' : 'none'}`
              }}
            >
              <p>{item.answer}</p>
            </S.Answer>
          </S.FaqWrapper>
        ))}
      </S.Content>
    </S.Section>
  )
}
export default Faq
