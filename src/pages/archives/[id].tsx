import CatImage from '@/components/cat-image'
import CatVideo from '@/components/cat-video'
import Layout from '@/components/layouts/article'
import Meta from '@/components/meta'
import Paragraph from '@/components/paragraph'
import Section from '@/components/section'
import SectionHeading from '@/components/section-heading'
import SimpleBreadcrumb from '@/components/simple-breadcrumb'
import { Box, Container, HStack, List, ListItem, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface ContentProps {
  type: 'paragraph' | 'image' | 'image-stack'
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

export default function CatArchive() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState<InfoProps | null>(null)

  useEffect(() => {
    if (!router.isReady)
      return
    fetch(`/info/${router.query.id}.json`)
      .then(response => response.json())
      .then((data) => {
        setInfo(data)
        setLoading(false)
      })
  }, [router.isReady, router.query.id])

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
        {info?.sections.map((section, sectionIndex) => {
          return (
            <Section key={sectionIndex} delay={0.1 * (sectionIndex + 2)}>
              <SectionHeading>{section.heading}</SectionHeading>
              {section.contents.map((content: any, contentIndex) => {
                if (content.type === 'paragraph') {
                  return <Paragraph key={`${sectionIndex}-${contentIndex}`}>{content.value}</Paragraph>
                }
                else if (content.type === 'image') {
                  return <CatImage key={`${sectionIndex}-${contentIndex}`} src={content.src} alt={content.alt} caption={content.caption} />
                }
                else if (content.type === 'video') {
                  return <CatVideo src={content.src} />
                }
                else if (content.type === 'image-stack') {
                  if (Object.keys(content).includes('caption')) {
                    return (
                      <Box
                        key={`${sectionIndex}-${contentIndex}`}
                        // @ts-expect-error
                        align="center"
                        my={4}
                      >
                        <HStack>
                          {content.images.map((image: { src: string }, imageIndex: number) => (
                            <CatImage key={`${sectionIndex}-${contentIndex}-${imageIndex}`} style={{ width: '50%' }} src={image.src} alt={image.src} />
                          ))}
                        </HStack>
                        <Text textAlign="center" as="sub">
                          {content.caption}
                        </Text>
                      </Box>
                    )
                  }
                  else {
                    return (
                      <HStack key={`${sectionIndex}-${contentIndex}`}>
                        {content.images.map((image: { src: string, caption: string }, imageIndex: number) => (
                          <CatImage key={`${sectionIndex}-${contentIndex}-${imageIndex}`} style={{ width: '50%' }} src={image.src} alt={image.src} caption={image.caption} />
                        ))}
                      </HStack>
                    )
                  }
                }
                else {
                  return (
                    <>Error</>
                  )
                }
              })}
            </Section>
          )
        })}
      </Container>
    </Layout>
  )
}
