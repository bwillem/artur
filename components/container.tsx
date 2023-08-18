'use client'

import { Box, BoxProps } from "@chakra-ui/react"

function Container(props: BoxProps) {
    return <Box maxW='1312px' mx='auto' {...props} />
}

export default Container
