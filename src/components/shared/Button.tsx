'use client'

import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer'
  const variantStyles = {
    primary: 'bg-[#4169E1] text-white hover:bg-[#3557BC]',
    secondary: 'border-2 border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1] hover:text-white',
    outline: 'border-2 border-white text-white hover:bg-white/10'
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
} 