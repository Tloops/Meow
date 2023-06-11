import React from 'react'
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const ToggleThemeButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label='Toggle Theme'
      colorScheme={useColorModeValue('purple', 'orange')}
      icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
      onClick={toggleColorMode}
    >

    </IconButton>
  )
}

export default ToggleThemeButton
