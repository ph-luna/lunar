import { FC } from 'react'

import * as S from '@styles/components/Background'

import useWindowSize from '../hooks/useWindowSize'

const Background: FC = () => {
  const windowSize = useWindowSize()

  return (
    <S.Screen>
      <S.SmallStars size={windowSize} />
      <S.MediumStars size={windowSize} />
      <S.LargeStars size={windowSize} />
      <S.GlowEffect />
      <S.Eclipse />
    </S.Screen>
  )
}

export default Background
