import React from 'react'
import { Box, Text } from "@chakra-ui/react"

interface Props {
  src: string,
  caption?: string
}

const CatVideo = ({ src, caption }: Props) => {
  return (
    <Box w='full' borderRadius='lg' overflow='hidden' mb={4}>
      <video controls>
        <source src={src} type='video/mp4'/>
      </video>
      <Text textAlign='center'>
        {caption}
      </Text>
    </Box>
  )
}

export default CatVideo
