import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'

const Button = forwardRef<HTMLButtonElement, ComponentPropsWithoutRef<'button'>>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-coffee text-cream hover:bg-coffee-light shadow-lg',
      secondary: 'bg-caramel text-white hover:bg-caramel-light shadow-md',
      outline: 'border-2 border-coffee text-coffee hover:bg-coffee hover:text-cream',
      ghost: 'text-coffee hover:bg-coffee/10',
      link: 'text-caramel underline-offset-4 hover:underline',
    }

    const sizes = {
      default: 'h-12 px-6 py-3',
      sm: 'h-10 px-4 py-2 text-sm',
      lg: 'h-14 px-8 py-4 text-lg',
      icon: 'h-12 w-12',
    }

    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel disabled:pointer-events-none disabled:opacity-50 active:scale-95',
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
