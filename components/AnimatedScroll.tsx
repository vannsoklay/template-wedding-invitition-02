'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface HorizontalScrollProps {
  children: React.ReactNode
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const totalWidth = Array.from(container.children).reduce(
        (width, child) => width + child.clientWidth,
        0
      )
      container.style.width = `${totalWidth}px`
    }
  }, [children])

  return (
    <div className="overflow-hidden bg-red-800 ">
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex"
      >
        {children}
      </motion.div>
    </div>
  )
}

