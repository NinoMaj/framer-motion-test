import * as React from 'react'
import { motion } from 'framer-motion'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
}

const Items = () => {
  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <style jsx>{`
        ul {
          color: #fff;
        }
      `}</style>
    </ul>
  )
}

export const Variants = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      <motion.nav animate={isOpen ? 'open' : 'closed'} variants={variants}>
        <Items />
      </motion.nav>
    </>
  )
}
