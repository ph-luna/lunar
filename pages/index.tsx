import Head from 'next/head'

import * as S from 'styles/pages/index.styles'

export default function Index () {
  return (
    <S.Container>
      <Head>
        <title>Lunar</title>
      </Head>

      <S.CenterMessageContainer>
        <S.CenterMessage>desenvolvedor web<br />fullstack</S.CenterMessage>
      </S.CenterMessageContainer>
    </S.Container>
  )
}
