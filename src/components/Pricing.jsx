export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: 'Free',
      desc: 'Try the core marketplace features',
      features: ['5 downloads / mo', 'Basic licensing', 'Community support'],
      cta: 'Get started',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$24/mo',
      desc: 'For power buyers and solo creators',
      features: ['Unlimited downloads', 'Creator storefront', 'Advanced licensing', 'Priority support'],
      cta: 'Upgrade to Pro',
      highlight: true,
    },
    {
      name: 'Teams',
      price: '$79/mo',
      desc: 'Collaborate and manage at scale',
      features: ['Seats & permissions', 'Private libraries', 'SAML/SSO', 'Invoicing & SLAs'],
      cta: 'Start a Team',
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-gray-700">Start free, grow as you go. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.highlight ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200 bg-white'} p-6` }>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <div className="text-2xl font-bold">{t.price}</div>
              </div>
              <p className={`mt-2 text-sm ${t.highlight ? 'text-white/80' : 'text-gray-600'}`}>{t.desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${t.highlight ? 'bg-white' : 'bg-gray-900'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium ${t.highlight ? 'bg-white text-gray-900 hover:bg-white/90' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
