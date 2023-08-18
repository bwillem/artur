'use client'

import Image from 'next/image'
import { Box, Heading } from '@chakra-ui/react'
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
        borderRadius={2}
        background='rgba(0,0,0,0.5)'
        {...props}
    />

const H2 = props =>
    <Heading
        textTransform='uppercase'
        letterSpacing='2xl'
        fontWeight='light'
        fontSize='md'
        as='h2'
        color='white'
        {...props} />

function RemoteImageLink({ alt, src, href, blurDataURL, children, ...rest }) {
    const { sizes, ..._rest } = rest

    return (
        <Box
            position='relative'
            borderRadius={2}
            w='100%'
            h='100%'
            {..._rest}
        >
            <Image
                placeholder='blur'
                blurDataURL={blurDataURL}
                alt={alt}
                src={src}
                sizes={sizes}
                style={{ objectFit: 'cover' }}
                fill
            />
            <Link href={href}>
                <Overlay>
                    <H2>{children}</H2>
                </Overlay>
            </Link>
        </Box>
    )
}

export default RemoteImageLink
