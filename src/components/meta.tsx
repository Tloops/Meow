import type { ReactNode } from 'react'
import { Badge } from '@chakra-ui/react'
import React from 'react'

interface Props {
  children: ReactNode
}

function Meta({ children }: Props) {
  return (
    <Badge colorScheme="green" mr={2}>
      {children}
    </Badge>
  )
}

export default Meta
