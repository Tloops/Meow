import Layout from '@/components/layouts/article'
import { Box, HStack, Link, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <Layout>
      <HStack align="center" justify="center" spacing={10}>
        <Box
          // @ts-ignore
          align="center"
          opacity={0.4}
          fontSize="sm"
        >
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          Sutcat. All Rights Reserved.
        </Box>

        <Link
          href="https://github.com/ZephyrusZhang/Meow"
          isExternal
          color={useColorModeValue('black', 'white')}
        >
          <FaGithub />
        </Link>
      </HStack>
    </Layout>
  )
}

export default Footer
