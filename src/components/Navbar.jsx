import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Marketplace', href: '#marketplace' },
    { label: 'Docs', href: '#docs' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
            <span className="font-semibold tracking-tight text-gray-900">Auraloom</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</a>
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white text-sm font-medium px-4 py-2 hover:bg-gray-800 transition-colors">Start free</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-gray-700 py-2">
                  {item.label}
                </a>
              ))}
              <div className="pt-2 flex gap-3">
                <a href="#" className="text-sm font-medium text-gray-700">Sign in</a>
                <a href="#" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white text-sm font-medium px-3 py-2">Start free</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
