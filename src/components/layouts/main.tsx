import Footer from '@/components/footer'
import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Navbar from '../navbar'

function Main({ children, router }: any) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Meow</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={20}>
        {children}
      </Container>

      <Footer />
    </Box>
  )
}

export default Main
