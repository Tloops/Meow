import React, { ReactNode } from 'react'
import { Badge } from "@chakra-ui/react"

interface Props {
  children: ReactNode
}

const Meta = ({ children }: Props) => (
  <Badge colorScheme='green' mr={2}>
    {children}
  </Badge>
)

export default Meta
