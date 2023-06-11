import React, { ReactNode } from 'react'
import NextLink from 'next/link'
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton, MenuItem, MenuList,
  Stack,
  useColorModeValue
} from "@chakra-ui/react"
import Logo from "@/components/logo"
import { HamburgerIcon } from "@chakra-ui/icons"
import ToggleThemeButton from "./toggle-theme-button"

interface LinkItemProps {
  href: string,
  path: string,
  children: ReactNode
}

const LinkItem = ({ href, path, children }: LinkItemProps) => {
  const isActive = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={isActive ? 'glassTeal' : undefined}
        color={isActive ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

interface NavbarProps {
  path: string
}

const Navbar = ({ path }: NavbarProps) => {

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        // @ts-ignore
        wrap='wrap'
        align='center'
        justify='space-between'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing='tighter'>
            <Logo/>
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href='/cats' path={path}>查猫</LinkItem>
          <LinkItem href='/where' path={path}>找猫</LinkItem>
        </Stack>

        <Box
          flex={1}
          // @ts-ignore
          align='right'
        >
          <ToggleThemeButton/>
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon/>}
                variant='outline'
                aria-label='options'
              />
              <MenuList>
                <NextLink href='/' passHref>
                  <MenuItem as={Link}>主页</MenuItem>
                </NextLink>
                <NextLink href='/cats' passHref>
                  <MenuItem as={Link}>查猫</MenuItem>
                </NextLink>
                <NextLink href='/where' passHref>
                  <MenuItem as={Link}>找猫</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
