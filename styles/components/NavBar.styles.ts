import tw from 'twin.macro'

export const Container = tw.div`
    w-screen
    h-28
    flex
    items-center
    justify-between
    px-10
    fixed
    z-20
    inset-y-0
    max-w-screen-xl
    md: px-0
    text-white
`

export const Title = tw.h1`
    font-michroma
    text-4xl
    pl-5
`

export const LogoContainer = tw.div`
    flex 
    items-center
`

export const LinksContainer = tw.div`
    flex
    items-center
`

export const LinkTag = tw.a`
    font-michroma
    mx-5
    hover:underline
    text-xl
`
