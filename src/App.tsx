import { Analytics } from '@vercel/analytics/react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Work } from './components/Work'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  )
}

export default App
