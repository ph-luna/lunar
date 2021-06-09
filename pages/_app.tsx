import type { AppProps } from 'next/app'
import Head from 'next/head'

import TwinMacro from 'styles/TwinMacro'
import Background from 'components/Background'
import NavBar from 'components/NavBar'

import { Wrapper } from 'styles/GlobalStyles'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Michroma&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <meta name="description" content="Lunar: Portifólio de Pedro Henrique de Luna Vieira" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TwinMacro />
      <NavBar />
      <Background />

      <Component {...pageProps} />
    </Wrapper>
  )
}
export default MyApp
