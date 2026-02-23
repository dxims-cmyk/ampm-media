import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-[#F5F5DC]/20 bg-transparent px-3 py-2 text-sm text-[#F5F5DC] placeholder:text-[#F5F5DC]/40 focus:outline-none focus:ring-1 focus:ring-[#F5F5DC]/50 focus:border-[#F5F5DC]/50 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
