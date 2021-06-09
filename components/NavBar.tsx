import { FC } from 'react'
import Image from 'next/image'

import * as S from 'styles/components/NavBar.styles'

const NavBar: FC = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <Image src='/assets/lunar-logo.png' width={68} height={80} />
        <S.Title>Lunar</S.Title>
      </S.LogoContainer>

      <S.LinksContainer>
        <S.LinkTag href="#">Sobre</S.LinkTag>
        <S.LinkTag href="#">Portfólio</S.LinkTag>
        <S.LinkTag href="#">Contato</S.LinkTag>
      </S.LinksContainer>
    </S.Container>
  )
}

export default NavBar
