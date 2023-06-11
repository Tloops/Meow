import React from 'react'
import { Image } from "@chakra-ui/react"

interface Props {
  src: string,
  alt: string
}

const CatImage = ({ src, alt }: Props) => (
  <Image src={src} alt={alt} borderRadius='lg' w='full' mb={4}/>
)

export default CatImage
