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
            <ListItem>
              <Meta>状态</Meta>
              <span>已送养</span>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            起源
          </Heading>
          <Paragraph>
            花卷在2022年8月份于创园的一个纸箱内发现。发现花卷的第二天又在慧园附近的水渠内找见发糕。猜测这两只修猫应该是一窝的，并且都被主人遗弃了（因为是在纸箱里面找见花卷的）。
          </Paragraph>
          <HStack my={4}>
            <CatImage src='/images/cats/huajuan-and-fagao/huajuan-0.jpg' alt='花卷' caption='刚被发现的花卷'/>
            <CatImage src='/images/cats/huajuan-and-fagao/fagao-0.jpg' alt='发糕' caption='刚被发现的发糕'/>
          </HStack>
          <Paragraph>
            之后两只修猫被猫舍的同学暂养。当时他们大概只有三四周大，还没断奶，需要每天喂三到四次。早上起来第一件事基本就是喂这两个崽子。喂其中一只的时候，另一只就会疯狂地叫，养了一段时间之后经常幻听喵叫（
          </Paragraph>
          <CatVideo src='/videos/huajuan-and-fagao/huajuan-0.mp4'/>
          <CatVideo src='/videos/huajuan-and-fagao/fagao-0.mp4'/>
          <Paragraph>
            花卷比较能吃，总是饿然后到处找奶嘴，所以下面的情形经常发生。发糕被撅力（喜
          </Paragraph>
          <CatVideo src='/videos/huajuan-and-fagao/0.mp4'/>
          <Paragraph>
            花卷和发糕大概养了一个多月，就先后被领养走了。
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            云吸猫
          </Heading>
          <CatImage src='/images/cats/huajuan-and-fagao/0.jpg' alt='花卷和发糕'/>
          <CatImage src='/images/cats/huajuan-and-fagao/huajuan-1.jpg' alt='花卷'/>
          <CatImage src='/images/cats/huajuan-and-fagao/fagao-1.jpg' alt='发糕'/>
          <CatImage src='/images/cats/huajuan-and-fagao/huajuan-2.jpg' alt='花卷'/>
          <CatImage src='/images/cats/huajuan-and-fagao/1.jpg' alt='花卷和发糕'/>
          <CatVideo src='/videos/huajuan-and-fagao/1.mp4'/>
          <CatVideo src='/videos/huajuan-and-fagao/fagao-1.mp4'/>
        </Section>
      </Container>
    </Layout>
  )
}

export default HuajuanAndFagao
