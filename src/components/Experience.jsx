import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'

const bullets = [
  'Handle 20–30 customer support tickets daily, resolving issues related to accounts, payments, and platform functionality',
  'Investigate payment failures, withdrawal issues, and transaction discrepancies to ensure smooth user experience',
  'Monitor user transactions to identify suspicious patterns and potential fraudulent activities',
  'Perform KYC verification and support Customer Due Diligence (CDD) and Enhanced Due Diligence (EDD) processes',
  'Analyze user behavior and transaction data to detect risks such as abnormal activity and third-party funding',
  'Collaborate with internal teams to escalate and resolve complex issues efficiently',
  'Maintain detailed case documentation and investigation reports using internal tools like Confluence',
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="relative py-28 px-6 bg-obsidian-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-gold-500 tracking-[0.25em] uppercase mb-4"
          >
            04 / Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white"
          >
            Work <span className="text-gradient-gold italic">History</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-5 top-8 bottom-0 w-px bg-gradient-to-b from-gold-500/60 via-gold-500/20 to-transparent"
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pl-16"
          >
            {/* Dot */}
            <div className="absolute left-[13px] top-6 w-5 h-5 rounded-full border-2 border-gold-500 bg-obsidian-900 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            </div>

            {/* Card */}
            <div className="glass-card rounded-2xl p-8">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={14} className="text-gold-500" />
                    <h3 className="font-body font-semibold text-white text-lg">
                      Support & Risk Operations
                    </h3>
                  </div>
                  <p className="font-display text-gold-400 text-base font-medium italic">
                    Mediacle Technologies
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20">
                  <Calendar size={12} className="text-gold-400" />
                  <span className="font-mono text-xs text-gold-400">Dec 2024 – Present</span>
                </div>
              </div>

              {/* Active badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] text-emerald-400 tracking-wider">CURRENTLY ACTIVE</span>
              </div>

              {/* Bullets */}
              <ul className="space-y-3">
                {bullets.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-gold-500/60 mt-0.5 flex-shrink-0 group-hover:text-gold-400 transition-colors"
                    />
                    <p className="font-body text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {point}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
