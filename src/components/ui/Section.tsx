import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'

const Section = forwardRef<HTMLElement, ComponentPropsWithoutRef<'section'>>(
  ({ className, id, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn('py-16 md:py-24 lg:py-32', className)}
        {...props}
      />
    )
  }
)

Section.displayName = 'Section'

export { Section }
