'use client'

import { Container } from '@/components/shared/Container'
import { TrendingUp, Settings2, Megaphone, Rocket } from 'lucide-react'

const services = [
  {
    title: 'Strategic Business Planning',
    description: 'Develop robust growth strategies and roadmaps tailored to your online business model',
    icon: TrendingUp,
    features: [
      'Market analysis & positioning',
      'Competitive advantage strategy',
      'Revenue model optimization',
    ],
  },
  {
    title: 'Operational Excellence',
    description: 'Streamline your business processes for maximum efficiency and scalability',
    icon: Settings2,
    features: [
      'Workflow optimization',
      'Team structure & management',
      'SOP development & implementation',
    ],
  },
  {
    title: 'Digital Marketing Strategy',
    description: 'Data-driven marketing approaches to accelerate customer acquisition and retention',
    icon: Megaphone,
    features: [
      'Customer journey mapping',
      'Conversion optimization',
      'Marketing channel strategy',
    ],
  },
  {
    title: 'Scaling & Growth',
    description: 'Proven frameworks to scale your business while maintaining operational integrity',
    icon: Rocket,
    features: [
      'Scalable business modeling',
      'Growth bottleneck analysis',
      'Expansion planning',
    ],
  },
]

export const Services = () => {
  return (
    <section className="py-32 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            Comprehensive solutions to help your business grow and succeed in the digital landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#4169E1] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-[#4169E1]" />
              </div>
              <h3 className="text-xl font-semibold text-[#333333] mb-4">
                {service.title}
              </h3>
              <p className="text-[#666666] mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#4169E1] mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#666666]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 