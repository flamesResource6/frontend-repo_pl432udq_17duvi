import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-10 pt-28">
        <div className="flex flex-col items-start justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900"
          >
            AI Content Marketplace
            <span className="block text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500"> for teams and creators</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-lg text-gray-700 max-w-xl"
          >
            Discover, compose, and monetize AI-generated articles, scripts, voices, and assets — all in one trusted platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#marketplace" className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white font-medium px-6 py-3 hover:bg-gray-800 transition-colors">
              Explore marketplace
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-xl border border-gray-300 text-gray-900 font-medium px-6 py-3 bg-white/80 hover:bg-white transition-colors backdrop-blur">
              Become a creator
            </a>
          </motion.div>

          <div className="mt-6 grid grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <div className="text-gray-900 font-semibold">12k+</div>
              Active buyers
            </div>
            <div>
              <div className="text-gray-900 font-semibold">3.5k+</div>
              Verified creators
            </div>
            <div>
              <div className="text-gray-900 font-semibold">240k+</div>
              Assets traded
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[520px] rounded-3xl overflow-hidden border border-white/50 shadow-[0_10px_60px_rgba(80,56,237,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-blue-500/20 to-orange-400/20 mix-blend-overlay pointer-events-none" />
            <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop" alt="Marketplace preview" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
