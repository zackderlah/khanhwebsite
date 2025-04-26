'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/shared/Button'
import { Container } from '@/components/shared/Container'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'About', href: '#about' },
]

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 h-[60px] bg-white shadow-sm z-50">
      <Container className="h-full flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#333333]">
          KHANH NGUYEN LLC
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-[#333333] hover:text-[#4169E1] transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <Button 
            variant="primary"
            onClick={() => {
              const contactSection = document.querySelector('#contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-[60px] left-0 right-0 bg-white shadow-md md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-[#333333] hover:text-[#4169E1] transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <Button 
                variant="primary" 
                className="w-full"
                onClick={() => {
                  const contactSection = document.querySelector('#contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                  setIsMenuOpen(false)
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
} 