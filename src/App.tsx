import './App.css'
import { Blog } from './pages/Blog'
import { Admin } from './pages/Admin'
import { Legal } from './pages/Legal'
import { Login } from './pages/Login'
import { TeamPage } from './pages/TeamPage'
import { COOKIES, PRIVACY, TERMS } from './data/legal'
import { useUi } from './hooks/useContent'
import { useRoute } from './hooks/useRoute'
import { useReveal } from './hooks/useReveal'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Contact } from './sections/Contact'
import { Featured } from './sections/Featured'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { LogoStrip } from './sections/LogoStrip'
import { Mission } from './sections/Mission'
import { News } from './sections/News'
import { Nav } from './sections/Nav'
import { Stats } from './sections/Stats'
import { Partners } from './sections/Partners'
import { Recognition } from './sections/Recognition'
import { Solutions } from './sections/Solutions'
import { TeamTeaser } from './sections/TeamTeaser'
import { Testimonials } from './sections/Testimonials'

function App() {
  const route = useRoute()
  const ui = useUi()
  useReveal(route)
  useSmoothScroll()

  return (
    <>
      <a className="skip-link" href="#main">
        {ui.skip}
      </a>
      <Nav />
      <main id="main">
        {route === 'blog' && <Blog />}
        {route === 'privacy' && <Legal doc={PRIVACY} />}
        {route === 'terms' && <Legal doc={TERMS} />}
        {route === 'cookies' && <Legal doc={COOKIES} />}
        {route === 'team' && <TeamPage />}
        {route === 'login' && <Login />}
        {route === 'admin' && <Admin />}
        {route === 'home' && (
          <>
            <Hero />
            <Stats />
            <Mission />
            <Solutions />
            <LogoStrip />
            <Featured />
            <Recognition />
            <Partners />
            <Testimonials />
            <TeamTeaser />
            <News />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
