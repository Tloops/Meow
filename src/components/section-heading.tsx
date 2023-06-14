import React, { ReactNode } from 'react'
import { Heading } from "@chakra-ui/react"

interface Props {
  children: ReactNode
}

const SectionHeading = ({ children }: Props) => {
  return (
    <Heading as='h3' variant='section-title'>
      {children}
    </Heading>
  )
}

export default SectionHeading
