import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Briefcase, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Briefcase, value: '20–30', label: 'Tickets resolved / day' },
  { icon: GraduationCap, value: 'MCA', label: 'Graduate · 2025' },
  { icon: TrendingUp, value: 'Fintech', label: 'Passion & Focus' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs text-gold-500 tracking-[0.25em] uppercase mb-4"
            >
              01 / About Me
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight"
            >
              Analyst by trade,<br />
              <span className="text-gradient-gold italic">problem-solver</span> at heart
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-slate-400 leading-relaxed font-body"
            >
              <p>
                I'm an <span className="text-slate-200 font-medium">MCA graduate (2025)</span> with hands-on experience in Support and Risk Operations, specializing in resolving user issues and analyzing transaction behavior.
              </p>
              <p>
                Currently, I handle customer queries, investigate payment-related issues, and identify potential fraud patterns. This experience has built strong <span className="text-gold-400 font-medium">analytical thinking</span>, problem-solving skills, and effective communication.
              </p>
              <p>
                I'm particularly passionate about <span className="text-slate-200 font-medium">fintech</span> — systems involving payments, user experience, and operational efficiency. I'm actively enhancing my skills in <span className="text-gold-400 font-medium">SQL and data analysis</span> to grow further in this field.
              </p>
            </motion.div>
          </div>

          {/* Right: Stats + Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            {/* Decorative card */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-full" />
              <blockquote className="font-display text-xl text-slate-200 leading-relaxed italic mb-4">
                "Every transaction tells a story. My job is to read between the lines."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold-500" />
                <span className="font-mono text-xs text-gold-400 tracking-wider">A TARUN KUMAR RAJU</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass-card rounded-xl p-4 text-center group hover:border-gold-500/30 transition-all duration-300"
                >
                  <Icon size={18} className="text-gold-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-display text-lg font-bold text-white">{value}</p>
                  <p className="font-body text-[10px] text-slate-500 leading-tight mt-1">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
