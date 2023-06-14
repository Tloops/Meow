import React from 'react'
import { Container, Heading, HStack, List, ListItem } from "@chakra-ui/react"
import Layout from "@/components/layouts/article"
import SimpleBreadcrumb from "@/components/simple-breadcrumb"
import CatImage from "@/components/cat-image"
import Section from "@/components/section"
import Paragraph from "@/components/paragraph"
import Meta from "@/components/meta"
import CatVideo from "@/components/cat-video"

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
        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            刷新地点
          </Heading>
          <Paragraph>
            一教一楼；一教二楼
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            起源
          </Heading>
          <Paragraph>
            麻酱最初于2019年在学校中出现。发现她的时候已经怀有身孕。之后产下整整九只猫崽，并且在猫舍同学的帮助下，这九只崽子全部存活并被送养。
          </Paragraph>
          <CatImage src='/images/cats/makou/makou-0.jpg' alt='麻酱带娃' caption='麻酱的九只崽'/>
          <CatVideo src='/videos/makou/0.mp4'/>
          <Paragraph>
            带完崽绝育后，麻酱就开启了“我吃吃吃”的状态。几个月内吃成了肥猪（
          </Paragraph>
          <HStack>
            <CatImage src='/images/cats/makou/makou-1.jpg' alt='痩麻酱' caption='胖之前'/>
            <CatImage src='/images/cats/makou/makou-2.jpg' alt='飞竹' caption='”飞竹“'/>
          </HStack>
          <Paragraph>
            还诞生了下面的名场面
          </Paragraph>
          <CatVideo src='/videos/makou/1.mp4'/>
          <Paragraph>
            虽然麻酱平时性格不错，给撸给亲亲，但是她有时候抽风也会抓人（麻酱应该是校内发卡发的最多的猫猫）。所以各位平时撸的时候要小心。
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as='h3' variant='section-title'>
            云吸猫
          </Heading>
          <CatImage src='/images/cats/makou/makou-3.jpg' alt='麻酱'/>
          <CatImage src='/images/cats/makou/makou-4.jpg' alt='麻酱'/>
          <CatImage src='/images/cats/makou/makou-5.jpg' alt='麻酱'/>
          <CatImage src='/images/cats/makou/makou-6.jpeg' alt='麻酱'/>
          <CatImage src='/images/cats/makou/makou-7.jpg' alt='麻酱'/>
          <CatImage src='/images/cats/makou/makou-8.jpg' alt='麻酱'/>
        </Section>
      </Container>
    </Layout>
  )
}

export default Makou
