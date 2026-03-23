import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dot-grid"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-500/4 blur-[100px] pointer-events-none" />

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-8 md:left-16 w-16 h-16 border-l border-t border-gold-500/20" />
      <div className="absolute bottom-24 right-8 md:right-16 w-16 h-16 border-r border-b border-gold-500/20" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-8">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/25 bg-gold-500/8 text-gold-400 text-xs font-mono tracking-widest uppercase">
            <Sparkles size={11} className="animate-pulse" />
            Open to Work · Risk & KYC Analyst
          </div>
        </motion.div>

        {/* Name */}
        <motion.div {...fadeUp(0.2)}>
          <p className="font-mono text-xs text-slate-500 tracking-[0.3em] uppercase mb-3">
            Hello, I'm
          </p>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-none mb-2">
            <span className="text-white">A Tarun</span>
          </h1>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-none mb-6">
            <span className="text-gradient-gold">Kumar Raju</span>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div {...fadeUp(0.35)}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="glow-line w-16 opacity-60" />
            <p className="font-body text-lg sm:text-xl text-slate-300 font-medium tracking-wide">
              Risk & KYC Analyst
            </p>
            <div className="glow-line w-16 opacity-60" />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.45)}
          className="font-body text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          "Solving user problems with{' '}
          <span className="text-gold-400 font-medium">data-driven insights</span>"
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-obsidian-900 font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30 text-sm"
          >
            View Projects
            <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-gold-500/30 text-gold-400 hover:border-gold-400 hover:bg-gold-500/8 font-medium rounded-full transition-all duration-300 text-sm"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-slate-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-gold-500/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
