import Head from 'next/head'

import * as S from '@styles/pages/index.styles'

export default function Index () {
  return (
    <S.Container>
      <Head>
        <title>Lunar</title>
        <meta name="description" content="Lunar: Portifólio de Pedro Henrique de Luna Vieira" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.CenterMessageContainer>
        <S.CenterMessage>desenvolvedor web<br />fullstack</S.CenterMessage>
      </S.CenterMessageContainer>
    </S.Container>

  )
}
