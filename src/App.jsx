import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-slate-400 text-sm flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
          <p>© {new Date().getFullYear()} CSE Portfolio. All rights reserved.</p>
          <p className="text-slate-500">Built with FastAPI, React, and love.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
