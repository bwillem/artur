'use client'
import { Box } from '@/components/chakra'
import { BoxProps, useColorModeValue } from '@chakra-ui/react'

const ThemedBackground = (props: BoxProps) => {
    const bg = useColorModeValue('white', 'gray.800')
    return <Box background={bg} {...props} />
}

export default ThemedBackground
