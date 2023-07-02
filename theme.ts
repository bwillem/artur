import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
}

const theme = extendTheme({
    config,
    fonts: {
        body: inter.style.fontFamily,
    },
    letterSpacings: {
        'xl': '0.2em',
        '2xl': '0.4em',
    },
    styles: {
        global: props => ({
            'html, body': {
                bg: mode('white', 'gray.800')(props),
            }
        }),
    },
})

export default theme