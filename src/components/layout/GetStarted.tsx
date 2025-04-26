'use client'

import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'

export const GetStarted = () => {
  return (
    <section className="py-20 bg-[#4169E1]">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Take the first step towards growth and success. Our team is ready to help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-white text-[#4169E1] hover:bg-white/90">
              Schedule a Call
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
} 