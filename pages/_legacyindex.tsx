import Head from 'next/head'
import Header from '@/components/header'
import { Stack } from '@chakra-ui/react'
import cinematography from '../public/img/art_gadja_cinematography.png'
import notForProfit from '../public/img/art_gadja_not_for_profit.png'
import about from '../public/img/art_gadja_about.png'
import Container from '@/components/container'
import ImageLink from '../components/imageLink'

export default function Home() {
  return (
    <>
      <Head>
        <title>Artur Gadja</title>
        <meta name="description" content="Artur Gadja | Cinematographer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container as='main'>
        <Stack spacing={4} my={4}>
          <ImageLink
            alt='cinematography'
            href='/work'
            src={cinematography}
            height='400px'
          >
            Cinematography
          </ImageLink>
          <ImageLink
            alt='not for profit'
            href='/not-for-profit'
            src={notForProfit}
          >
            Not for profit
          </ImageLink>
          <ImageLink
            alt='about'
            href='/about'
            src={about}
          >
            About
          </ImageLink>
        </Stack>
      </Container >
    </>
  )
}
