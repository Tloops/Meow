import React, { ReactNode } from 'react'
import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import Image, { StaticImageData } from "next/image"
import { Global } from "@emotion/react"

interface Props {
  children?: ReactNode,
  id: string,
  title: string,
  thumbnail: StaticImageData
}

const GridItem = ({ children, id, title, thumbnail }: Props) => {
  return (
    <Box
      w='100%'
      // @ts-ignore
      align='center'
    >
      <NextLink href={`/cats/${id}`}>
        <LinkBox cursor='pointer'>
          <Image src={thumbnail} alt={title} className='grid-item-thumbnail' placeholder='blur'/>
          <LinkOverlay href={`/cats/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>
            {children}
          </Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}

const GridItemStyle = () => (
  <Global styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
  `}/>
)

export { GridItem, GridItemStyle }