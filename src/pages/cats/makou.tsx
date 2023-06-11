import React from 'react'
import { Container, Heading } from "@chakra-ui/react"
import Layout from "@/components/layouts/article"
import SimpleBreadcrumb from "@/components/simple-breadcrumb"
import CatImage from "@/components/cat-image"
import Section from "@/components/section"
import Paragraph from "@/components/paragraph"

const Makou = () => {
  return (
    <Layout title='麻酱'>
      <Container>
        <SimpleBreadcrumb>
          麻酱
        </SimpleBreadcrumb>

        <CatImage src='/images/cats/makou.jpg' alt='Makou Main'/>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            基本信息
          </Heading>
          <Paragraph>
            姓名：麻酱。性别：母。性格：？
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Makou
