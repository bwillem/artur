import { Stack } from '@/components/chakra'
import cinematography from '../public/img/art_gadja_cinematography.png'
import notForProfit from '../public/img/art_gadja_not_for_profit.png'
import about from '../public/img/art_gadja_about.png'
import Container from '@/components/container'
import ImageLink from '@/components/imageLink'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { 
    default: 'Artur Gadja',
    template: '% | Artur Gadja',
  },
  description: 'Artur Gadja, Cinematographer',
  viewport: 'width=device-width, initial-scale=1',
}

export default function Home() {
  return (
    <>
      <Container>
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
      </Container>
    </>
  )
}
