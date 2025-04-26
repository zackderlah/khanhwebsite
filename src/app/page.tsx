import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/layout/Hero'
import { Services } from '@/components/layout/Services'
import { Approach } from '@/components/layout/Approach'
import { About } from '@/components/layout/About'
import { Contact } from '@/components/layout/Contact'
import { GetStarted } from '@/components/layout/GetStarted'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="services">
        <Services />
      </section>
      <section id="approach">
        <Approach />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <GetStarted />
      <Footer />
      </main>
  )
}
