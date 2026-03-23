import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tarunraju227@gmail.com',
    href: 'mailto:tarunraju227@gmail.com',
    desc: 'Best way to reach me',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/tarunraju',
    href: 'https://www.linkedin.com/in/a-tarun-kumar-raju-064973298/',
    desc: 'Let\'s connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/tarunraju227',
    href: 'https://github.com/tarunrajukumar05-create',
    desc: 'Explore my work',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="relative py-28 px-6">
      {/* Glow */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 bg-gold-500/3 blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-mono text-xs text-gold-500 tracking-[0.25em] uppercase mb-4"
        >
          05 / Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight"
        >
          Let's <span className="text-gradient-gold italic">Work Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-base max-w-lg mx-auto mb-14"
        >
          I'm open to opportunities in Risk Operations, KYC Analysis, Fraud Detection, and Fintech roles.
          Let's connect.
        </motion.p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {links.map(({ icon: Icon, label, value, href, desc }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6 text-left group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/15 group-hover:bg-gold-500/20 transition-all">
                  <Icon size={18} className="text-gold-400" />
                </div>
                <ArrowUpRight
                  size={15}
                  className="text-slate-600 group-hover:text-gold-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>
              <p className="font-body font-semibold text-white text-sm mb-0.5">{label}</p>
              <p className="font-mono text-[10px] text-gold-400/70 mb-2 truncate">{value}</p>
              <p className="font-body text-[11px] text-slate-500">{desc}</p>
            </motion.a>
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <a
            href="mailto:tarunraju227@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold-500 hover:bg-gold-400 text-obsidian-900 font-semibold rounded-full text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/30"
          >
            <Mail size={16} />
            Send me an email
          </a>
        </motion.div>
      </div>
    </section>
  )
}
