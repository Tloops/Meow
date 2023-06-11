import React from 'react'
import { Box, Button, Container, Divider, Heading, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import Image from "next/image"
import Layout from "@/components/layouts/article"

import notFound from '../../public/images/tearing-cat.png'

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <Heading as='h1'>Not Found</Heading>
        <Image src={notFound} alt='流泪猫猫头' style={{ marginTop: 20, marginBottom: 20 }}/>
        <Text>访问了不存在的猫猫？</Text>
        <Divider my={6}/>

        <Box
          my={6}
          // @ts-ignore
          align='center'
        >
          <NextLink href='/'>
            <Button colorScheme='teal'>
              返回主页
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFound
