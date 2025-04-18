import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
          <Analytics />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default App
