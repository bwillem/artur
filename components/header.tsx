'use client'

import NextLink from "next/link"
import Container from "./container"
import { LinkProps, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Link, Box, Heading, HStack, Text } from '@/components/chakra'

function HeaderLink(props: LinkProps) {
    const color = useColorModeValue('gray.500', 'gray.500')
    const hoverColor = useColorModeValue('black', 'white')
    const pathname = usePathname()
    const selected = pathname === props.href

    return (
        <Link
            // color={selected ? hoverColor : color}
            color={color}
            fontSize='xs'
            fontFamily='heading'
            borderBottomWidth='1px'
            borderBottomColor={selected ? color : 'transparent'}
            textTransform='uppercase'
            letterSpacing='xl'
            _hover={{
                borderBottomColor: hoverColor,
                textDecoration: 'none',
                color: hoverColor,
            }}
            {...props}
        />
    )
}

function Header() {
    const nameColor = useColorModeValue('black', 'white')
    const cinColor = useColorModeValue('gray.400', 'gray.500')

    return (
        <Box borderBottomWidth='1px'>
            <Container
                justifyContent='space-between'
                alignItems='center'
                display='flex'
                py={6}
                as='nav'>
                <NextLink href='/'>
                    <Image
                        alt='think farm logo'
                        src='/think-farm.png'
                        height='64'
                        width='64' />
                </NextLink>
                <Heading
                    fontSize='lg'
                    textTransform='uppercase'
                    letterSpacing='2xl'
                    fontWeight='light'
                    color={nameColor}
                    as='h1'>
                    Art Gadja{` `}
                    <Text
                        letterSpacing='xl'
                        fontSize='sm'
                        color={cinColor}
                        as='span'>
                        Cinematographer
                    </Text>
                </Heading>
                <HStack
                    align='center'
                    justify='space-between'
                    as='nav'
                    spacing={8}
                >
                    <HeaderLink href='/work' as={NextLink}>
                        Work
                    </HeaderLink>
                    <HeaderLink href='/contact' as={NextLink}>
                        Contact
                    </HeaderLink>
                </HStack>
            </Container>
        </Box>
    )
}

export default Header