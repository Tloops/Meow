import type { ReactNode } from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

interface Props {
  children: ReactNode
}

function SimpleBreadcrumb({ children }: Props) {
  return (
    <Box>
      <NextLink href="/cats">
        <Link>猫猫们</Link>
      </NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
          {children}
        </Heading>
      </span>
    </Box>
  )
}

export default SimpleBreadcrumb
