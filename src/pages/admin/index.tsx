import React, { useEffect } from 'react'
import { Box, Container, useColorModeValue } from "@chakra-ui/react"

const RickRoll = () => {
  useEffect(() => {
    window.location.href = 'https://www.bilibili.com/video/BV1uT4y1P7CX'
  }, [])
  

  return (
    <Container>
      <Box
        borderRadius='lg'
        p={3}
        mb={6}
        textAlign='center'
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        你 被 骗 了 ！
      </Box>
    </Container>
  )
}

export default RickRoll
