import NextLink from "next/link"
import Container from "./container"
import { Box, HStack, Heading, Link, LinkProps, Text, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"

function HeaderLink(props: LinkProps) {
    return <Link fontSize='sm' {...props} />
}

function Header() {
    const nameColor = useColorModeValue('black', 'white')
    const cinColor = useColorModeValue('gray.400', 'gray.500')

    return (
        <Box borderBottomWidth='1px'>
            <Container
                justifyContent='space-around'
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
                    fontSize='sm'
                    textTransform='uppercase'
                    letterSpacing='2xl'
                    color={nameColor}
                    as='h1'>
                    Art Gadja{` `}
                    <Text
                        fontSize='xs'
                        color={cinColor}
                        as='span'>
                        Cinematographer
                    </Text>
                </Heading>
                <HStack
                    align='center'
                    justify='space-between'
                    as='nav'
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