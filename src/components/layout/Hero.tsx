'use client'

import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'

export const Hero = () => {
  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/id/1/1920/1080"
          alt="Business consulting background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1E3A8A] bg-opacity-75" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transform Your Business with Expert Consulting
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            We help businesses scale and succeed through strategic planning, innovative solutions, and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary"
              onClick={() => handleScroll('#services')}
              className="bg-[#4169E1] text-white hover:bg-white hover:text-[#1E3A8A] transition-all font-semibold"
            >
              Our Services
            </Button>
            <Button 
              variant="secondary"
              onClick={() => handleScroll('#contact')}
              className="bg-transparent border-2 border-white text-white hover:bg-[#4169E1] hover:text-white transition-all hover:border-[#4169E1] font-semibold"
            >
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
} 