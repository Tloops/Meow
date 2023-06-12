import React from 'react'
import { Box, Image, Text } from "@chakra-ui/react"

interface Props {
  src: string,
  alt: string,
  caption?: string
}

const CatImage = ({ src, alt, caption }: Props) => (
  <Box>
    <Image src={src} alt={alt} borderRadius='lg' w='full' mb={4}/>
    <Text textAlign='center'>
      {caption}
    </Text>
  </Box>
)

export default CatImage
