import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C67C4E] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#1C1410] text-[#FAF6F0] shadow hover:bg-[#C67C4E]",
        secondary:
          "bg-[#FAF6F0] text-[#1C1410] border border-[#1C1410]/20 hover:bg-[#1C1410] hover:text-[#FAF6F0]",
        outline:
          "border border-[#1C1410]/30 bg-transparent text-[#1C1410] hover:bg-[#1C1410] hover:text-[#FAF6F0]",
        ghost:
          "text-[#1C1410] hover:bg-[#1C1410]/10",
        link:
          "text-[#1C1410] underline-offset-4 hover:underline",
        caramel:
          "bg-[#C67C4E] text-white shadow-lg shadow-[#C67C4E]/30 hover:bg-[#8A5A3B]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
