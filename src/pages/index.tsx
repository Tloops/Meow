import { Box, Container } from "@chakra-ui/react"
import Layout from "@/components/layouts/article"


export default function Home() {
  return (
    <Layout>
      <Container>
        <Box borderRadius='lg' bg='red' p={3} mb={6} textAlign='center'>
          妮可的猫猫们！
        </Box>
      </Container>
    </Layout>
  )
}
