import CatImage from '@/components/cat-image'
import Layout from '@/components/layouts/article'
import Meta from '@/components/meta'
import Paragraph from '@/components/paragraph'
import Section from '@/components/section'
import SectionHeading from '@/components/section-heading'
import SimpleBreadcrumb from '@/components/simple-breadcrumb'
import { Box, Container, HStack, List, ListItem, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

interface ContentProps {
  type: 'paragraph' | 'image'
  value: any
}

interface SectionProps {
  heading: string
  contents: ContentProps[]
}

interface InfoProps {
  id: string
  name: string
  gender: string
  characteristic: string
  personality: string
  state: string
  sections: SectionProps[]
}

function Xuebao() {
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState<InfoProps | null>(null)

  useEffect(() => {
    fetch('/info/xuebao.json')
      .then(response => response.json())
      .then((data) => {
        setInfo(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <>加载中</>
  }

  return (
    <Layout title={info?.name}>
      <Container>
        <SimpleBreadcrumb>
          {info?.name}
        </SimpleBreadcrumb>

        <CatImage src={`/images/cats/${info?.id}.jpg`} alt="雪宝" />

        <Section delay={0.1}>
          <SectionHeading>基本信息</SectionHeading>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>姓名</Meta>
              <span>{info?.name}</span>
            </ListItem>
            <ListItem>
              <Meta>性别</Meta>
              <span>{info?.gender}</span>
            </ListItem>
            <ListItem>
              <Meta>特点</Meta>
              <span>{info?.characteristic}</span>
            </ListItem>
            <ListItem>
              <Meta>性格</Meta>
              <span>{info?.personality}</span>
            </ListItem>
            <ListItem>
              <Meta>状态</Meta>
              <span>{info?.state}</span>
            </ListItem>
          </List>
        </Section>
        {info?.sections.map((section, index) => {
          return (
            <Section delay={0.1 * (index + 2)} key={index}>
              <SectionHeading>{section.heading}</SectionHeading>
              {section.contents.map((content, index) => {
                if (content.type === 'paragraph') {
                  return <Paragraph key={index}>{content.value}</Paragraph>
                }
                else if (content.type === 'image') {
                  return <CatImage key={index} src={content.value.src} alt={content.value.alt} caption={content.value.caption} />
                }
              })}
            </Section>
          )
        })}
      </Container>
    </Layout>
  )
}

export default Xuebao
