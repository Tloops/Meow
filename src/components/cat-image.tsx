import React from 'react'
import { Box, Image, Text } from "@chakra-ui/react"

interface Props {
  src: string,
  alt: string,
  caption?: string
}

const CatImage = ({ src, alt, caption }: Props) => (
  <Box
    my={4}
    // @ts-ignore
    align='center'
  >
    <Image src={src} alt={alt} borderRadius='lg' w='full'/>
    <Text textAlign='center' as='sub'>
      {caption}
    </Text>
  </Box>
)

export default CatImage
