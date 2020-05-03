import * as React from 'react'
import { motion } from 'framer-motion'

export const GestureAnimationButton = () => (
  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    Button
  </motion.button>
)
