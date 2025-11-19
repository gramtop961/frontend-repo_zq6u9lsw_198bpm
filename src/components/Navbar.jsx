import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-white font-semibold tracking-tight text-lg">
            <span className="text-blue-400">CSE</span> Portfolio
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-200/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" className="text-slate-300 hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" className="text-slate-300 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors">
                <Mail size={18} /> Hire Me
              </a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-slate-200/90" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
