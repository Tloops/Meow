import React from 'react'
import Layout from "@/components/layouts/article"
import { Container, Heading, HStack, List, ListItem } from "@chakra-ui/react"
import SimpleBreadcrumb from "@/components/simple-breadcrumb"
import CatImage from "@/components/cat-image"
import CatVideo from "@/components/cat-video"
import Section from "@/components/section"
import Meta from "@/components/meta"
import Paragraph from "@/components/paragraph"

const HuajuanAndFagao = () => {
  return (
    <Layout title='花卷和发糕'>
      <Container>
        <SimpleBreadcrumb>
          花卷和发糕
        </SimpleBreadcrumb>

        <CatImage src='/images/cats/huajuan-and-fagao.jpg' alt='花卷和发糕'/>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            基本信息
          </Heading>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>姓名</Meta>
              <span>花卷（左）  发糕（右）</span>
            </ListItem>
            <ListItem>
              <Meta>性别</Meta>
              <span>两个男孩子</span>
            </ListItem>
            <ListItem>
              <Meta>性格</Meta>
              <span>修猫咪哪有性格不好的，抓起来狠狠吸就完事了！</span>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            起源
          </Heading>
          <Paragraph>
            花卷在2022年8月份于创园的一个纸箱内发现。发现花卷的第二天又在慧园附近的水渠内找见发糕。猜测这两只修猫应该是一窝的，并且都被主人遗弃了（因为是在纸箱里面找见花卷的）。
          </Paragraph>
          <HStack>
            <CatImage src='/images/cats/huajuan-and-fagao/huajuan-0.jpg' alt='花卷' caption='刚被发现的花卷'/>
            <CatImage src='/images/cats/huajuan-and-fagao/fagao-0.jpg' alt='发糕' caption='刚被发现的发糕'/>
          </HStack>
        </Section>

        <CatVideo src='/videos/huajuan-and-fagao/0.mp4'/>
      </Container>
    </Layout>
  )
}

export default HuajuanAndFagao
