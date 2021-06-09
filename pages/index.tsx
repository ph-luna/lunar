import Head from 'next/head'

import * as S from '~styles/pages/index'

export default function Index () {
  return (
    <S.Container>
      <Head>
        <title>Lunar</title>
        <meta name="description" content="Lunar: Portifólio de Pedro Henrique de Luna Vieira" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </S.Container>
  )
}
