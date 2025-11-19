import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('✅ Message sent! I will get back to you soon.')
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus('❌ Could not send message. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Contact</h2>
        <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <div>
            <label className="block text-slate-200 mb-2">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-slate-900/60 border border-white/15 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-slate-200 mb-2">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-slate-900/60 border border-white/15 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-slate-200 mb-2">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full bg-slate-900/60 border border-white/15 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Say hello..."
              required
            />
          </div>

          <div className="flex items-center gap-4">
            <button type="submit" className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition">Send</button>
            {status && <span className="text-slate-300">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
