'use client'

import { CheckCircle2, Lightbulb, Target, Users2 } from 'lucide-react'
import { Container } from '@/components/shared/Container'
import Image from 'next/image'

const approachSteps = [
  {
    title: 'Discovery',
    description: 'We begin by understanding your business goals, challenges, and target audience.',
    icon: Lightbulb,
  },
  {
    title: 'Strategy',
    description: 'We develop a customized strategy aligned with your business objectives.',
    icon: Target,
  },
  {
    title: 'Collaboration',
    description: 'We work closely with your team to implement solutions effectively.',
    icon: Users2,
  },
  {
    title: 'Results',
    description: 'We measure success and continuously optimize for better outcomes.',
    icon: CheckCircle2,
  },
]

export const Approach = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Our Approach
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            We follow a proven methodology to deliver exceptional results for our clients. Our approach combines industry expertise with innovative thinking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {approachSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#4169E1] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-[#4169E1]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#666666]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://picsum.photos/800/600"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#4169E1] bg-opacity-20" />
          </div>
        </div>
      </Container>
    </section>
  )
} 