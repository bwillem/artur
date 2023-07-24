import NextLink from "next/link"
import Container from "./container"
import { Box, HStack, Heading, Link, LinkProps, Text, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"
import { useRouter } from "next/router"

function HeaderLink(props: LinkProps) {
    const color = useColorModeValue('gray.400', 'gray.500')
    const hoverColor = useColorModeValue('black', 'white')
    const selected = useRouter().pathname === props.href

    return (
        <Link
            color={selected ? hoverColor : color}
            fontSize='xs'
            fontFamily='heading'
            borderBottomWidth='1px'
            borderBottomColor={selected ? hoverColor : 'transparent'}
            textTransform='uppercase'
            letterSpacing='widest'
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
                py={4}
                as='nav'>
                <Image
                    alt='think farm logo'
                    src='/think-farm.png'
                    height='64'
                    width='64' />
                <Heading
                    fontSize='md'
                    textTransform='uppercase'
                    letterSpacing='2xl'
                    fontWeight='light'
                    color={nameColor}
                    as='h1'>
                    Art Gadja{` `}
                    <Text
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
                    spacing={6}
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