import React, { ReactNode } from 'react'
import MotionDiv from "./motion-div"

interface Props {
  children: ReactNode,
  delay?: number
}

const Section = ({ children, delay }: Props) => {
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
