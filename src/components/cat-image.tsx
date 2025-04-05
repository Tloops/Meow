import type { CSSProperties } from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  src: string
  alt: string
  caption?: string
  style?: CSSProperties
}

function CatImage({ src, alt, caption, style }: Props) {
  return (
    <Box
      my={4}
      // @ts-ignore
      align="center"
      {...style}
    >
      <Image src={src} alt={alt} borderRadius="lg" w="full" />
      <Text textAlign="center" as="sub">
        {caption}
      </Text>
    </Box>
  )
}

export default CatImage
