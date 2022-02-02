import CardOperation from 'elements/CardOperation'
import React from 'react'

import * as S from './styled'

export const Operation = () => {
  return (
    <S.Section>
      <S.Content>
        <S.TextsWrapper>
          <h2>Como Funciona</h2>
          <p>
            Ocupamos o 68º lugar entre as 500 empresas de SaaS (Software as a
            Service) com crescimento mais rápido em todo o mundo!
          </p>
        </S.TextsWrapper>

        <S.CardWrapper>
          <CardOperation
            imagemRightCard="/img/imagem_operation_1.png"
            iconeCard1="/img/icone_numero_1.svg"
            iconeCard2="/img/icone_numero_2.svg"
            iconeCard3="/img/icone_numero_3.svg"
            titleCard1="Nós enviamos os sensores"
            titleCard2="Cole em suas máquinas"
            titleCard3="Receba Insights valiosos"
            descriptionCard1="Fazemos a entrega pelos Correios para o Brasil todo. Você recebe o sensor na sua empresa. Não necessita passar pelo Wi-Fi industrial e nem falar com a TI."
            descriptionCard2="Nosso sensor é colado na máquina como um bandaid. Ele é responsável por transmitir os dados de vibração e temperatura do equipamento para a plataforma."
            descriptionCard3="Nosso sistema centraliza informações precisas sobre suas máquinas, com insights e análises, como saúde do equipamento, detecção de anomalias e variação de espectros."
            bg_color="linear-gradient(90deg, #73e49a 0%, #1ba049 98.96%)"
          />

          <CardOperation
            imagemRightCard="/img/imagem_operation_2.png"
            iconeCard1="/img/icone_numero_4.svg"
            iconeCard2="/img/icone_numero_5.svg"
            iconeCard3="/img/icone_numero_6.svg"
            titleCard1="Nos envie sua lista Ativos, Locais e Usuários"
            titleCard2="Automatize seus Planos e Ordens de Serviço"
            titleCard3="Substitua o Excel por completo"
            descriptionCard1="Deixamos a plataforma pronta e organizada para você, preparando sua planta e seus ativos seguindo a disposição enviada para nós, bem como seus mantenedores cadastrados na plataforma."
            descriptionCard2="Use procedimentos online para organizar checklists e inspeções. Sequenciar e planejar Ordens de Serviço preventivamente nunca foi tão fácil."
            descriptionCard3="A plataforma vai abrir as Ordens de serviços e distribui-las conforme as automações configuradas, permitindo que toda a equipe de manutenção se preocupe apenas em executar suas atividades de rotina."
            bg_color="linear-gradient(90deg, #22D3EE 0%, #2563EB 98.96%);"
          />
        </S.CardWrapper>
      </S.Content>
    </S.Section>
  )
}
export default Operation
