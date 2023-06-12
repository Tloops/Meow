import React from 'react'
import { Box, HStack, Link } from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa"
import Layout from "@/components/layouts/article"

const Footer = () => {
  return (
    <Layout>
      <HStack justify='center'>
        <Box
          // @ts-ignore
          align='center'
          opacity={0.4}
          fontSize='sm'
        >
          &copy; {new Date().getFullYear()} Meow. All Rights Reserved.
        </Box>

        <Link href='https://github.com/ZephyrusZhang/Meow' isExternal>
          <FaGithub/>
        </Link>
      </HStack>
    </Layout>
  )
}

export default Footer
