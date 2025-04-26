'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'

export const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            Get in touch with us to discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#4169E1] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#4169E1]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#333333] mb-2">
                    Phone
                  </h3>
                  <p className="text-[#666666]">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#4169E1] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#4169E1]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#333333] mb-2">
                    Email
                  </h3>
                  <p className="text-[#666666]">
                    info@mknglobal.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#4169E1] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#4169E1]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#333333] mb-2">
                    Address
                  </h3>
                  <p className="text-[#666666]">
                    123 Business Street<br />
                    Suite 100<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4169E1] focus:ring-2 focus:ring-[#4169E1] focus:ring-opacity-20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4169E1] focus:ring-2 focus:ring-[#4169E1] focus:ring-opacity-20"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#333333] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4169E1] focus:ring-2 focus:ring-[#4169E1] focus:ring-opacity-20"
                  placeholder="Your message"
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
} 