import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-2xl">
          <p className="text-blue-300/90 tracking-wide uppercase text-xs mb-4">Computer Science & Engineering</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_6px_24px_rgba(59,130,246,0.35)]">
            Building interactive systems, intelligent software, and delightful UIs
          </h1>
          <p className="text-slate-200/90 mt-6 text-lg max-w-xl">
            I’m a CSE student who loves bridging low-level systems with modern web tech. Explore my projects across AI, systems, and full‑stack development.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 transition">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition">Get in Touch</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-900" />
    </section>
  )
}
