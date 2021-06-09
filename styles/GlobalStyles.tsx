
import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'

interface IStarsProps {
  size: {
    width: number
    height: number
  }
}

function multiplyStars (quantity: number, width: number) {
  let stars = ''

  for (let i = 2; i <= quantity; i++) {
    stars += ` ${(Math.floor(Math.random() * width) + 0)}px ${(Math.floor(Math.random() * 4000) + 0)}px #FFF,`
  }
  return stars + `${(Math.floor(Math.random() * width) + 0)}px ${(Math.floor(Math.random() * 4000) + 0)}px #FFF;`
}

const StarsMoviment = keyframes`
  0% {
    transform: translateY(120vh);
  }

  100% {
    transform: translateY(-4100px);
  }
`

const glowAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0
  }

  50% {
    transform: scale(1.2);
    box-shadow: 0 0 15px #fff;
    filter: blur(20px);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0
  }
`

export const Screen = tw.div`
  bg-black
  w-screen
  h-screen
  flex
  justify-center
  items-center
  relative
  overflow-hidden
`

export const Eclipse = styled.div`
  position: absolute;
  width: 60vh;
  height: 60vh;
  border-radius: 50%;

  background: #0d0d0d;
  z-index: 5;
`

export const GlowEffect = styled.div`
  position: absolute;
  width: 59.5vh;
  height: 59.5vh;
  border-radius: 50%;
  background: #fff;
  animation: ${glowAnimation} 18s ease 5s infinite;
  z-index: 4;
`

export const SmallStars = styled.div<IStarsProps>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow:${({ size }) => {
    const num = Math.floor((size.width + size.height) / 4)
    return multiplyStars(num, size.width)
  }};
  animation: ${StarsMoviment} 50s linear infinite;
  z-index: 1;
`

export const MediumStars = styled.div<IStarsProps>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow:${({ size }) => {
    const num = Math.floor((size.width + size.height) / 5)
    return multiplyStars(num, size.width)
  }};
  animation: ${StarsMoviment} 80s linear infinite;
  z-index: 2; 
`

export const LargeStars = styled.div<IStarsProps>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 4px;
  height: 4px;
  background: transparent;
  box-shadow:${({ size }) => {
    const num = Math.floor((size.width + size.height) / 6)

    return multiplyStars(num, size.width)
  }};
  animation: ${StarsMoviment} 140s linear infinite;
  z-index: 3;
`
