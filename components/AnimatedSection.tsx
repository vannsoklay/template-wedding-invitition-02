"use client"

import { motion } from 'framer-motion'
import { forwardRef, ReactNode } from 'react'

interface AnimatedSectionProps {
  id: string
  children: ReactNode
  className?: string
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ id, children, className = '' }, ref) => {
    return (
      <motion.section
        ref={ref}
        id={id}
        className={`${className}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.section>
    )
  }
)

AnimatedSection.displayName = 'AnimatedSection'

export default AnimatedSection

