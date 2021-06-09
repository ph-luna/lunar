import type { AppProps } from 'next/app'

import TwinMacro from '~styles/TwinMacro'
import * as S from '../styles/GlobalStyles'

import useWindowSize from '../hooks/useWindowSize'

function MyApp ({ Component, pageProps }: AppProps) {
  const windowSize = useWindowSize()

  return (
    <S.Screen>
      <TwinMacro />
      <S.SmallStars size={windowSize} />
      <S.MediumStars size={windowSize} />
      <S.LargeStars size={windowSize} />
      <S.GlowEffect />
      <S.Eclipse />
      <Component {...pageProps} />
    </S.Screen>
  )
}
export default MyApp
