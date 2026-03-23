import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  HeadphonesIcon, CreditCard, ShieldAlert,
  Database, FileSpreadsheet, Brain,
} from 'lucide-react'

const skills = [
  {
    icon: HeadphonesIcon,
    name: 'Customer Support',
    desc: 'Resolving 20–30 tickets daily across accounts, payments, and platform issues.',
    level: 90,
  },
  {
    icon: CreditCard,
    name: 'Payment Operations',
    desc: 'Investigating failures, withdrawal issues, and transaction discrepancies.',
    level: 85,
  },
  {
    icon: ShieldAlert,
    name: 'Fraud Detection',
    desc: 'Identifying suspicious patterns, abnormal activity, and third-party funding.',
    level: 80,
  },
  {
    icon: Database,
    name: 'SQL',
    desc: 'Writing queries for data analysis, AML investigation, and reporting.',
    level: 70,
  },
  {
    icon: FileSpreadsheet,
    name: 'Excel',
    desc: 'Data organization, pivot tables, and analysis for operational reporting.',
    level: 80,
  },
  {
    icon: Brain,
    name: 'Problem Solving',
    desc: 'Structured thinking to resolve complex cases and improve processes.',
    level: 88,
  },
]

function SkillCard({ skill, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="glass-card glass-card-hover rounded-2xl p-6 group cursor-default"
    >
      <div className="flex items-start gap-4 mb-5">
        <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/15 group-hover:bg-gold-500/20 transition-all duration-300">
          <skill.icon size={20} className="text-gold-400" />
        </div>
        <div className="flex-1">
          <h3 className="font-body font-semibold text-white text-sm">{skill.name}</h3>
          <p className="font-body text-xs text-slate-500 mt-1 leading-relaxed">{skill.desc}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <span className="font-mono text-[10px] text-slate-600 tracking-wider">Proficiency</span>
          <span className="font-mono text-[10px] text-gold-500">{skill.level}%</span>
        </div>
        <div className="h-0.5 bg-obsidian-600 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 0.9, delay: 0.3 + index * 0.08, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="relative py-28 px-6 bg-obsidian-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-gold-500 tracking-[0.25em] uppercase mb-4"
          >
            02 / Skills
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white"
          >
            Core <span className="text-gradient-gold italic">Competencies</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
