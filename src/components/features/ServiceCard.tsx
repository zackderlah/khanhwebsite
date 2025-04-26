'use client'

import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-[#4169E1] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-[#4169E1]" />
      </div>
      <h3 className="text-xl font-semibold text-[#333333] mb-4">{title}</h3>
      <p className="text-[#666666]">{description}</p>
    </div>
  )
} 