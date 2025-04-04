import type { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'
import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'

interface Props {
  children?: ReactNode
  id: string
  title: string
  thumbnail: StaticImageData
}

function GridItem({ children, id, title, thumbnail }: Props) {
  return (
    <Box
      w="100%"
      // @ts-ignore
      align="center"
    >
      <NextLink href={`/archives/${id}`}>
        <LinkBox cursor="pointer">
          <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" />
          <LinkOverlay href={`/archives/${id}`}>
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

function GridItemStyle() {
  return (
    <Global styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
  `}
    />
  )
}

export { GridItem, GridItemStyle }
