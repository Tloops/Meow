import type { ReactNode } from 'react'
import { Heading } from '@chakra-ui/react'
import React from 'react'

interface Props {
  children: ReactNode
}

function SectionHeading({ children }: Props) {
  return (
    <Heading as="h3" variant="section-title">
      {children}
    </Heading>
  )
}

export default SectionHeading
