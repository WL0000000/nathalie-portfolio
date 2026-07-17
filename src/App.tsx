import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { useEffect } from 'react'
import { useScrollEffects } from './hooks/useScrollEffects'
import { pageTitle } from './data/content'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PhotoStrip } from './components/PhotoStrip'
import { Priorities } from './components/Priorities'
import { Support } from './components/Support'
import { WhyRunning } from './components/WhyRunning'

function App() {
  useScrollEffects()

  useEffect(() => {
    document.title = pageTitle
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Priorities />
        <WhyRunning />
        <About />
        <PhotoStrip />
        <Support />
        <Contact />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
