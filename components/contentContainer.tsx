'use client'
import { Box } from '@/components/chakra'
import { BoxProps } from '@chakra-ui/react'

const ContentContainer = (props: BoxProps) => {
    return <Box flex='1' {...props} />
}

export default ContentContainer
