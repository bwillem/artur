'use client'
import NextLink from "next/link"
import Container from "./container"
import { LinkProps, Stack, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Link, Box, Heading, HStack, Text } from '@/components/chakra'

function FooterLink(props: LinkProps) {
    const color = useColorModeValue('gray.400', 'gray.500')
    const hoverColor = useColorModeValue('black', 'white')
    const pathname = usePathname()
    const selected = pathname === props.href

    return (
        <Link
            color={color}
            fontSize='xs'
            borderBottomWidth='1px'
            borderBottomColor={selected ? color : 'transparent'}
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
        <Box
            borderTopWidth='1px'
            position='relative'
            bottom={0}
        >
            <Container
                py={1}>
                <Stack
                    w='100%'
                    py={14}
                    align='center'
                >
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
                        as='nav'
                        mt={3}
                        align='center'
                        spacing={8}
                        justify='space-between'
                    >
                        <FooterLink href='/work' as={NextLink}>
                            Work
                        </FooterLink>
                        <FooterLink href='/not-for-profit' as={NextLink}>
                            Not for profit
                        </FooterLink>
                        <FooterLink href='/contact' as={NextLink}>
                            Contact
                        </FooterLink>
                    </HStack>
                </Stack>
                <Box w='100%'>
                    <Text
                        fontSize='xs'
                        color={cinColor}
                    >Copyright {new Date().getFullYear()} | Arthur Gadja</Text>
                </Box>
            </Container>
        </Box>
    )
}

export default Header