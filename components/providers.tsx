
'use client'

import theme from '@/theme'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'

export default function Providers({ children }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}
