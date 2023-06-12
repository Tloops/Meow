import React from 'react'
import { Container, Heading, List, ListItem } from "@chakra-ui/react"
import Layout from "@/components/layouts/article"
import SimpleBreadcrumb from "@/components/simple-breadcrumb"
import CatImage from "@/components/cat-image"
import Section from "@/components/section"
import Paragraph from "@/components/paragraph"
import Meta from "@/components/meta"

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
          <List ml={4} my={4}>
            <ListItem>
              <Meta>姓名</Meta>
              <span>麻酱</span>
            </ListItem>
            <ListItem>
              <Meta>性别</Meta>
              <span>母</span>
            </ListItem>
            <ListItem>
              <Meta>性格</Meta>
              <span>高冷御姐；对人爱答不理；对猫条爱不释爪</span>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            刷新地点
          </Heading>
          <Paragraph>
            一教一楼；一教二楼
          </Paragraph>
        </Section>
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            起源
          </Heading>
          <Paragraph>
            麻酱最初于2019年在学校中出现。发现她的时候已经怀有身孕。之后产下整整九只猫崽，并且在猫舍同学的帮助下，这九只崽子全部存活并被送养。
          </Paragraph>
          <CatImage src='/images/cats/makou/makou-0.jpg' alt='麻酱带娃' caption='麻酱的九只崽'/>
        </Section>
      </Container>
    </Layout>
  )
}

export default Makou
