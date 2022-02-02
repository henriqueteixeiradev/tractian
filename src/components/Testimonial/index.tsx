import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

import * as S from './styled'

import { testimonials } from 'mock/testimonials'

import useWindowDimensions from 'hook/useWindowDimensions'

export const Testimonial = () => {
  const [toCart, setToCart] = useState(0)
  const AnimateCart = useRef()

  const toCartMobile = [
    testimonials[0][0],
    testimonials[0][1],
    testimonials[1][0],
    testimonials[0][1]
  ]

  const { widthS } = useWindowDimensions()

  const cardsItems = widthS > 860 ? testimonials[toCart] : toCartMobile

  const handleIndexNext = () => {
    setToCart((prev) => (prev + 1) % testimonials.length)
  }

  const handleIndexPrev = () => {
    if (toCart > 0) {
      setToCart((prev) => (prev - 1) % testimonials.length)
    } else {
      setToCart(testimonials.length - 1)
    }
  }

  useEffect(() => {
    gsap.fromTo(
      AnimateCart.current,
      { opacity: '0', translateY: '20' },
      { opacity: '1', translateY: '0', duration: 1.5 }
    )
  }, [toCart])

  return (
    <S.Section>
      <S.Content>
        <S.TextsWrapper>
          <h2>Temos orgulho de ser a melhor escolha.</h2>
          <p>O que dizem nossos clientes.</p>
        </S.TextsWrapper>

        <S.CarouselWrapper>
          <S.ButtonWrapper>
            <button onClick={handleIndexPrev}>
              <img src="/img/arrow_left.svg" alt="Ícone" />
            </button>
          </S.ButtonWrapper>

          <S.CardsWrapper ref={AnimateCart}>
            {cardsItems.map((item, i) => (
              <S.Card key={i}>
                <S.ImageWrapper>
                  <Image
                    src={item.img}
                    alt="Imagem"
                    width={164.7}
                    height={115.2}
                    quality={100}
                  />
                </S.ImageWrapper>

                <S.AutorWrapper>
                  <h3>{item.author}</h3>
                  <p>{item.office}</p>
                </S.AutorWrapper>

                <S.DescriptionWrapper>
                  <img src="/img/icone_cite_left.png" alt="" />
                  <cite>{item.cite}</cite>
                  <img src="/img/icone_cite_left.png" alt="" />
                </S.DescriptionWrapper>

                <S.StarsWrapper>
                  <img src="/img/icone_star.svg" alt="Ícone" />
                  <img src="/img/icone_star.svg" alt="Ícone" />
                  <img src="/img/icone_star.svg" alt="Ícone" />
                  <img src="/img/icone_star.svg" alt="Ícone" />
                  <img src="/img/icone_star.svg" alt="Ícone" />
                </S.StarsWrapper>
              </S.Card>
            ))}
          </S.CardsWrapper>

          <S.ButtonWrapper>
            <button onClick={handleIndexNext}>
              <img src="/img/arrow_right.svg" alt="Ícone" />
            </button>
          </S.ButtonWrapper>
        </S.CarouselWrapper>
      </S.Content>
    </S.Section>
  )
}
export default Testimonial
