import React, { ReactNode } from 'react'
import { Box, Heading, Link } from "@chakra-ui/react"
import NextLink from "next/link"
import { ChevronRightIcon } from "@chakra-ui/icons"

interface Props {
  children: ReactNode
}

const SimpleBreadcrumb = ({ children }: Props) => {
  return (
    <Box>
      <NextLink href='/cats'>
        <Link>猫猫们</Link>
      </NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon/>
        &nbsp;
        <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
          {children}
        </Heading>
      </span>
    </Box>
  )
}

export default SimpleBreadcrumb
