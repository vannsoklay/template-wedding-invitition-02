import { forwardRef, ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ id, children, className = '' }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={`py-16 ${className}`}
      >
        {children}
      </section>
    )
  }
)

Section.displayName = 'Section'

export default Section
