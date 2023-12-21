import Container from "@/components/container"
import { cloudinaryUrl } from "@/util/cloudinary"
import { getImageByPublicId } from "@/util/fetch"
import Image from "next/image"
import { Box, Button, Stack } from '@/components/chakra'
import H1 from "@/components/h1"
import P from "@/components/p"
import Link from "next/link"

const get = getImageByPublicId('about-art')

export default async function () {
    const image = await get()
    const { blurDataURL, public_id, format } = image

    return (
        <Container>
            <Box my={4} h={['300px', '300px', '440px']} position='relative'>
                <Image
                    placeholder='blur'
                    blurDataURL={blurDataURL}
                    alt={public_id}
                    src={cloudinaryUrl({ public_id, format, transformation: `w_1312` })}
                    style={{ objectFit: 'cover' }}
                    fill
                />
            </Box>
            <Stack spacing={4} pt={8} maxW='30em' mx='auto'>
                <H1>Introduction</H1>
                <P>Where do I begin!? My name is Artur Gajda….that’s right, there is no ‘h’ in my name, deal with it. But seriously, it’s a European thing. Good luck with pronunciation of the last name.</P>
                <P>I’ve been creating visual media in some form or another since my early teens, but photography and video production are not only my life and passion, but also my profession. I am a freelancing camera operating machine with a particular predilection in documenting socioeconomic and political issues, and more importantly their resolutions.</P>
                <P>I operate under my company ThinkFarm Productions.</P>
                <P>The purpose of my website is to share my work with the world while having an outlet to whine and bitch about the production industry….JK. I’m hoping this URL, in conjunction with a smattering of social media blasts, will be a valuable communication and networking tool between myself, other creators, gurus, aficionados, and of course, future clients.</P>
                <P>I pledge to continue growing my image galleries as well as to post riveting video projects and ever-interesting and/or useful blog posts well into the unforeseen future.  I welcome comments, suggestions, requests, and commissions for work as you may see fit.  I hope you enjoy the content I create, or, at the very least, that you are highly entertained by my endeavours in the world of video production and photography.</P>
                <P>Thank you for perusing my content. I’ll do my utmost to send out update blasts on social. Next stop: figure out Instagram!</P>
                <Link href='contact'>
                    <Button>Contact me</Button>
                </Link>
            </Stack>
        </Container>
    )
}
