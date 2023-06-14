import React from 'react'
import { Box, Container, Heading, HStack, List, ListItem, Text } from "@chakra-ui/react"
import Layout from "@/components/layouts/article"
import SimpleBreadcrumb from "@/components/simple-breadcrumb"
import CatImage from "@/components/cat-image"
import Section from "@/components/section"
import Meta from "@/components/meta"
import Paragraph from "@/components/paragraph"

const Waiwai = () => {
  return (
    <Layout title='歪歪'>
      <Container>
        <SimpleBreadcrumb>
          歪歪
        </SimpleBreadcrumb>

        <CatImage src='/images/cats/waiwai.jpg' alt='歪歪'/>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            基本信息
          </Heading>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>姓名</Meta>
              <span>歪歪</span>
            </ListItem>
            <ListItem>
              <Meta>性别</Meta>
              <span>母</span>
            </ListItem>
            <ListItem>
              <Meta>特点</Meta>
              <span>狸花猫，尾部有一处天生的折角</span>
            </ListItem>
            <ListItem>
              <Meta>性格</Meta>
              <span>高冷、不怕人，温顺</span>
            </ListItem>
            <ListItem>
              <Meta>状态</Meta>
              <span>已绝育</span>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            刷新地点
          </Heading>
          <Paragraph>
            八栋车棚（歪歪现在去那里比较少了）；湖畔五六栋
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            起源
          </Heading>
          <Paragraph>
            歪歪于2021年3月初出现在荔园，并且已经怀有身孕。3月底产下三只猫崽。一家四口一直在荔园生活到六七月后，歪歪被带走绝育，三只小猫也被送养出去。
          </Paragraph>
          <CatImage src='/images/cats/waiwai/waiwai-0.jpg' alt='歪歪'/>
          <CatImage src='/images/cats/waiwai/waiwai-1.jpg' alt='歪歪和她的三只崽' caption='歪歪和她的三只崽'/>
          <Paragraph>
            绝育玩从医院回来后，歪歪在创园的窝被暴雨给淹了，另外创园有些远，投喂比较麻烦，就把歪歪转移到八栋车棚那里了。
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as='h3' variant='section-title'>
            趣事
          </Heading>
          <Paragraph>
            歪歪平时对人表现的性格还可以，但是歪歪对待其它猫就比较“霸道”了。见到其他猫基本上都是直接开干，并且从没有输过。唯一和歪歪关系比较好的猫是憨憨，憨憨还在的时候他们俩每天基本上形影不离。憨憨出事之后歪歪就再也没对其他猫温柔过了。
          </Paragraph>
          <Box
            // @ts-ignore
            align='center'
            my={4}
          >
            <HStack>
              <CatImage src='/images/cats/waiwai/waiwai-and-hanhan-0.jpg' alt='歪歪和憨憨'/>
              <CatImage src='/images/cats/waiwai/waiwai-and-hanhan-1.jpg' alt='歪歪和憨憨'/>
            </HStack>
            <Text textAlign='center' as='sub'>
              像极了老夫老妻
            </Text>
          </Box>
          <Paragraph>
            歪歪绝育之后也陷入了和麻酱一样的局面——过的太滋润了。身形也逐渐圆润了起来。
          </Paragraph>
          <HStack>
            <CatImage src='/images/cats/waiwai/waiwai-2.jpg' alt='痩歪歪' caption='痩歪歪'/>
            <CatImage src='/images/cats/waiwai/waiwai-3.jpg' alt='圆润歪歪' caption='圆润歪歪'/>
          </HStack>
        </Section>
        <Section delay={0.5}>
          <Heading as='h3' variant='section-title'>
            云吸猫
          </Heading>
          <CatImage src='/images/cats/waiwai/waiwai-4.jpg' alt='歪歪'/>
          <CatImage src='/images/cats/waiwai/waiwai-5.jpg' alt='歪歪'/>
          <CatImage src='/images/cats/waiwai/waiwai-6.jpg' alt='歪歪'/>
          <CatImage src='/images/cats/waiwai/waiwai-7.jpg' alt='歪歪'/>
          <Paragraph>
            PS：当你凝视歪歪的眼睛的时候，有时会发现她是斗鸡眼（喜
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Waiwai
