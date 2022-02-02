import Graphic from 'elements/icons/Graphic'
import React from 'react'

import * as S from './styled'

export const Footer = () => {
  return (
    <S.Section>
      <S.Content>
        © {new Date().getFullYear()}, TRACTIAN | Todos od direito reservados
      </S.Content>
    </S.Section>
  )
}
export default Footer
