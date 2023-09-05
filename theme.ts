import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import { Inter, Jost } from 'next/font/google'
import Button from './styles/button'

const inter = Inter({ subsets: ['latin'] })
const jost = Jost({ subsets: ['latin'] })

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
}

const theme = extendTheme({
    config,
    fonts: {
        heading: jost.style.fontFamily,
        body: inter.style.fontFamily,
    },
    letterSpacings: {
        'xl': '0.2em',
        '2xl': '0.4em',
    },
    styles: {
        global: () => ({
            body: {
                minHeight: '100vh',
            },
            'h1, h2, h3, h4': {
            }
        }),
    },
    components: {
        Button,
    },
})

export default theme