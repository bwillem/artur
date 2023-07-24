import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/header'
import { Stack, Image as ChakraImage, Box, Button, Heading } from '@chakra-ui/react'
import cinematography from '../public/img/art_gadja_cinematography.png'
import notForProfit from '../public/img/art_gadja_not_for_profit.png'
import about from '../public/img/art_gadja_about.png'
import Container from '@/components/container'
import Link from 'next/link'

const Overlay = props =>
  <Box
    position='absolute'
    width='100%'
    height='100%'
    top='0'
    left='0'
    _hover={{
      opacity: 1,
      transition: '.3s all',
    }}
    transition='.8s all'
    display='flex'
    alignItems='center'
    justifyContent='center'
    opacity={0}
    background='rgba(0,0,0,0.5)'
    {...props}
  />

export const H2 = props =>
  <Heading
    fontSize='md'
    textTransform='uppercase'
    letterSpacing='2xl'
    fontWeight='light'
    as='h2'
    {...props} />

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
          <Box position='relative'>
            <ChakraImage
              as={Image}
              borderRadius={2}
              alt='cinematography'
              src={cinematography}
              flexGrow={1}
              zIndex={0}
            />
            <Link href='/work'>
              <Overlay>
                <H2>Cinematography</H2>
              </Overlay>
            </Link>
          </Box>
          <Box position='relative'>
            <ChakraImage
              as={Image}
              borderRadius={2}
              alt='not for profit'
              src={notForProfit} />
            <Link href='/not-for-profit'>
              <Overlay>
                <H2>Not for profit</H2>
              </Overlay>
            </Link>
          </Box>
          <Box position='relative'>
            <ChakraImage
              as={Image}
              borderRadius={2}
              alt='about'
              src={about} />
            <Link href='/about'>
              <Overlay>
                <H2>About</H2>
              </Overlay>
            </Link>
          </Box>
        </Stack>
      </Container>
    </>
  )
}
