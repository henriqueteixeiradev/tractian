import React from 'react'
import Image from 'next/image'

import * as S from './styled'

interface CardOperationProps {
  imagemRightCard: string
  iconeCard1: string
  iconeCard2: string
  iconeCard3: string
  titleCard1: string
  titleCard2: string
  titleCard3: string
  bg_color: string
  descriptionCard1: string
  descriptionCard2: string
  descriptionCard3: string
}

export const CardOperation = ({
  imagemRightCard,
  iconeCard1,
  iconeCard2,
  iconeCard3,
  titleCard1,
  titleCard2,
  titleCard3,
  descriptionCard1,
  descriptionCard2,
  descriptionCard3,
  bg_color
}: CardOperationProps) => {
  return (
    <S.Card bg_color={bg_color}>
      <S.InfoLeftWrapper>
        <S.InfoWrapper>
          <img src={iconeCard1} alt="icon" />
          <S.TextsWrapper>
            <h3>{titleCard1}</h3>
            <p>{descriptionCard1}</p>
          </S.TextsWrapper>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <img src={iconeCard2} alt="icon" />
          <S.TextsWrapper>
            <h3>{titleCard2}</h3>
            <p>{descriptionCard2}</p>
          </S.TextsWrapper>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <img src={iconeCard3} alt="icon" />
          <S.TextsWrapper>
            <h3>{titleCard3}</h3>
            <p>{descriptionCard3}</p>
          </S.TextsWrapper>
        </S.InfoWrapper>
      </S.InfoLeftWrapper>

      <S.ImageWrapper>
        <Image
          src={imagemRightCard}
          alt=""
          width={1116}
          height={718}
          quality={100}
        />
      </S.ImageWrapper>
    </S.Card>
  )
}

export default CardOperation
