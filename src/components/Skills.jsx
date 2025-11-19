const skills = [
  {
    title: 'Core CS',
    items: ['Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks']
  },
  {
    title: 'AI/ML',
    items: ['Python', 'PyTorch', 'scikit-learn', 'Pandas']
  },
  {
    title: 'Web',
    items: ['React', 'FastAPI', 'Node.js', 'TailwindCSS']
  },
  {
    title: 'Tools',
    items: ['Git', 'Docker', 'Linux', 'MongoDB']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2 text-slate-300/90">
                {group.items.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
