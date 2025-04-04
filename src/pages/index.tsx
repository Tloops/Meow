import CatImage from '@/components/cat-image'
import Layout from '@/components/layouts/article'
import Paragraph from '@/components/paragraph'
import Section from '@/components/section'
import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'

export default function Home() {
  return (
    <Layout>
      <CatImage src="/images/oiiaio.gif" alt="Oiiaio" />
      <Container>
        <Box
          borderRadius="lg"
          p={3}
          mb={6}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          妮可的猫猫们！
        </Box>

        <Section delay={0.1}>
          <Paragraph>
            该网站收录了在深圳南山区西丽桃源街区1088号校园内生活过的一些猫猫的档案记录。
          </Paragraph>
          <Paragraph>
            注：档案中带有 “*” 的猫猫已经回喵星了。
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            声明
          </Heading>
          <Paragraph>
            由于网站中使用了许多来源比较难以追溯的图片，所以在搭建时并没有直接向图片的原作者申请使用授权（摆了）。如有侵权，请联系
            {' '}
            <b>QQ：2996362441</b>
            {' '}
            进行删除。
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
