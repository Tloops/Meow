import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../components/layouts/main'
import theme from "../lib/theme"
import { AnimatePresence } from "framer-motion"

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence
          mode='wait'
          initial
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
            >
            <Component {...pageProps} key={router.route}/>
            </AnimatePresence>
            </Layout>
            </ChakraProvider>
            )
          }

export default App
