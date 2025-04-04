import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(30deg);
    transition: 200ms ease;
  }
`

function Logo() {
  const logoImg = `/images/paw${useColorModeValue('-dark', '')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoImg} alt="logo" width={20} height={20} />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Sustcat
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
