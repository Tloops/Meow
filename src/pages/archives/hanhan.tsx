import CatImage from '@/components/cat-image'
import Layout from '@/components/layouts/article'
import Meta from '@/components/meta'
import Paragraph from '@/components/paragraph'
import Section from '@/components/section'
import SectionHeading from '@/components/section-heading'
import SimpleBreadcrumb from '@/components/simple-breadcrumb'
import { Container, List, ListItem } from '@chakra-ui/react'
import React from 'react'

function Hanhan() {
  return (
    <Layout title="憨憨">
      <Container>
        <SimpleBreadcrumb>
          憨憨
        </SimpleBreadcrumb>

        <CatImage src="/images/cats/hanhan.jpg" alt="憨憨" />

        <Section delay={0.1}>
          <SectionHeading>基本信息</SectionHeading>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>姓名</Meta>
              <span>憨憨</span>
            </ListItem>
            <ListItem>
              <Meta>性别</Meta>
              <span>公公</span>
            </ListItem>
            <ListItem>
              <Meta>特点</Meta>
              <span>橘白猫</span>
            </ListItem>
            <ListItem>
              <Meta>性格</Meta>
              <span>曾经怕人，后来允许人靠近抚摸</span>
            </ListItem>
            <ListItem>
              <Meta>状态</Meta>
              <span>去喵星了</span>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.2}>
          <SectionHeading>起源</SectionHeading>
          <Paragraph>
            憨憨最初于20年10月在校园内目击。曾居湖畔常常半夜大叫扰民，警惕性极高，很久才成功抓获绝育。绝育之后，憨憨依旧比较怕人。但是不知道从什么时候开始，憨憨开始和歪歪成双出现在八栋车棚里。然后他们俩基本上就形影不离了，干什么事情都在一起。
          </Paragraph>
          <CatImage src="/images/cats/hanhan/hanhan-and-waiwai-0.jpg" alt="憨憨和歪歪" />
          <CatImage src="/images/cats/hanhan/hanhan-and-waiwai-1.jpg" alt="憨憨和歪歪" />
          <CatImage src="/images/cats/hanhan/hanhan-and-waiwai-2.jpg" alt="憨憨和歪歪" />
          <Paragraph>
            过了很长一段时间，憨憨才没有那么怕人，逐渐给撸了。但是没想到之后就发生意外了。
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <SectionHeading>意外</SectionHeading>
          <Paragraph>
            2022年1月9日晚同学们听到八栋楼下有狗叫声，我们赶到现场时憨憨肚子已被狗咬破躲到了树上。经过救援虽然将憨憨从树上救下他却跑走躲了起来，寻找多时无果。2022年1月10日，经同学多方搜寻最终在八栋地下车库一车底发现了已经去了的憨憨。憨憨之后葬在了八栋后山的山丘上。
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <SectionHeading>云吸猫</SectionHeading>
          <CatImage src="/images/cats/hanhan/hanhan-and-waiwai-3.jpg" alt="憨憨和歪歪" />
          <CatImage src="/images/cats/hanhan/hanhan-and-waiwai-4.jpg" alt="憨憨和歪歪" />
          <CatImage src="/images/cats/hanhan/hanhan-2.jpg" alt="憨憨和果啤" caption="憨憨和果啤（右）" />
        </Section>
      </Container>
    </Layout>
  )
}

export default Hanhan
