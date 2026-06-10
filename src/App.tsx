import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { useEffect } from 'react'
import { useScrollEffects } from './hooks/useScrollEffects'
import { site } from './data/content'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Work } from './components/Work'

function App() {
  useScrollEffects()

  useEffect(() => {
    document.title = site.pageTitle
  }, [])

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
      <SpeedInsights />
    </>
  )
}

export default App
