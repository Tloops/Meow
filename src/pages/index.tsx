import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react"
import Layout from "@/components/layouts/article"
import Section from "@/components/section"
import Paragraph from "@/components/paragraph"


export default function Home() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius='lg'
          p={3}
          mb={6}
          textAlign='center'
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          妮可的猫猫们！
        </Box>

        <Section delay={0.1}>
          <Paragraph>
            该网站收录了在深圳南山区西丽桃源街区1088号校园内生活过的一些猫猫的档案记录。
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
