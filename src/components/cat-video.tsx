import { Box, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  src: string
  caption?: string
}

function CatVideo({ src, caption }: Props) {
  return (
    <Box
      w="full"
      borderRadius="lg"
      overflow="hidden"
      // @ts-ignore
      align="center"
      py={4}
      mb={4}
    >
      <video controls>
        <source src={src} type="video/mp4" />
      </video>
      <Text textAlign="center" as="sub">
        {caption}
      </Text>
    </Box>
  )
}

export default CatVideo
