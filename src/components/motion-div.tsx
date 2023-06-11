import { chakra, shouldForwardProp } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionDiv = chakra(motion.div, {
  shouldForwardProp(prop: string): boolean {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

export default MotionDiv