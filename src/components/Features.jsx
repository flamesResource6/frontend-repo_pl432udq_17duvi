import { ShieldCheck, Sparkles, Wallet, Share2, Rocket, Workflow } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Curated AI Assets',
    desc: 'High-signal prompts, voices, scripts, and datasets reviewed by experts.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Safety',
    desc: 'Licensing, provenance, and usage policies built-in for peace of mind.',
  },
  {
    icon: Workflow,
    title: 'Plug-and-Play Workflows',
    desc: 'Chain together assets into reusable flows with zero code.',
  },
  {
    icon: Share2,
    title: 'Collaboration',
    desc: 'Work with your team, share libraries, and manage permissions easily.',
  },
  {
    icon: Wallet,
    title: 'Creator Monetization',
    desc: 'Sell subscriptions, one-offs, and enterprise licenses with instant payouts.',
  },
  {
    icon: Rocket,
    title: 'Deploy Anywhere',
    desc: 'Export to your stack, or run in our secure, scalable cloud.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-purple-100/60 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Why teams choose Auraloom</h2>
          <p className="mt-4 text-gray-700">Everything you need to discover, compose, and ship AI content at scale.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 hover:shadow-xl transition-all">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 text-white flex items-center justify-center">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
