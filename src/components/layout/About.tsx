'use client'

import { Container } from '@/components/shared/Container'
import Image from 'next/image'

export const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            About Us
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            We are a team of passionate professionals dedicated to helping businesses thrive in the digital age.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#4169E1] bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-[#4169E1]">10+</span>
            </div>
            <h3 className="text-xl font-semibold text-[#333333] text-center mb-2">
              Years of Experience
            </h3>
            <p className="text-[#666666] text-center">
              Helping businesses grow and succeed through innovative solutions
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#4169E1] bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-[#4169E1]">100+</span>
            </div>
            <h3 className="text-xl font-semibold text-[#333333] text-center mb-2">
              Successful Projects
            </h3>
            <p className="text-[#666666] text-center">
              Delivering exceptional results across various industries
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#4169E1] bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-[#4169E1]">50+</span>
            </div>
            <h3 className="text-xl font-semibold text-[#333333] text-center mb-2">
              Happy Clients
            </h3>
            <p className="text-[#666666] text-center">
              Building long-term relationships with satisfied customers
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-[#666666] max-w-3xl mx-auto">
            With years of experience across various industries, we understand the challenges and opportunities that modern businesses face. Our team of experts is committed to providing tailored solutions that drive growth and success.
          </p>
        </div>
      </Container>
    </section>
  )
} 