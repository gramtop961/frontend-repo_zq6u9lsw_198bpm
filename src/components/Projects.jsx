import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/projects`)
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="projects" className="relative py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
          <a href="https://github.com/" target="_blank" className="text-slate-300 hover:text-white">See more →</a>
        </div>

        {loading ? (
          <p className="text-slate-300">Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.id} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
                {p.image && (
                  <div className="h-44 overflow-hidden">
                    <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="text-slate-300/90 text-sm mt-2 line-clamp-3">{p.description}</p>
                  {p.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">{t}</span>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex gap-3">
                    {p.github && <a href={p.github} target="_blank" className="text-slate-200 hover:text-white">Code</a>}
                    {p.demo && <a href={p.demo} target="_blank" className="text-slate-200 hover:text-white">Live</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
