import type { ReactNode } from 'react'
import React from 'react'
import MotionDiv from './motion-div'

interface Props {
  children: ReactNode
  delay?: number
}

function Section({ children, delay }: Props) {
  return (
    <MotionDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // @ts-ignore
      transition={{ duration: 0.8, delay }}
      mb={6}
    >
      {children}
    </MotionDiv>
  )
}

export default Section
