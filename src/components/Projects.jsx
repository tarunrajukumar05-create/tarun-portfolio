import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, Database, Shield, BarChart3 } from 'lucide-react'

const projects = [
  {
    icon: Shield,
    title: 'AML Fraud Investigation using SQL',
    subtitle: 'Anti-Money Laundering · Data Analysis',
    desc: 'A structured SQL-based project to investigate suspicious transaction patterns, flag potential money laundering activities, and generate compliance-ready investigation reports. Covers layering detection, smurfing patterns, and risk scoring.',
    tags: ['SQL', 'AML', 'Fraud Detection', 'KYC', 'Compliance'],
    github: 'https://github.com/tarunrajukumar05-create',
    featured: true,
  },
  {
    icon: Database,
    title: 'Transaction Anomaly Detection',
    subtitle: 'Risk Analysis · Excel + SQL',
    desc: 'Built a workflow to detect anomalous transaction volumes and flag accounts for enhanced due diligence (EDD), using behavioral baselines and rule-based triggers.',
    tags: ['Excel', 'SQL', 'Risk Ops', 'EDD'],
    github: 'https://github.com/tarunrajukumar05-create',
    featured: false,
  },
  {
    icon: BarChart3,
    title: 'KYC Operations Dashboard',
    subtitle: 'Process Tracking · Reporting',
    desc: 'Designed an internal reporting structure to track KYC verification queues, case resolution times, and CDD completion rates across customer segments.',
    tags: ['KYC', 'CDD', 'Excel', 'Reporting'],
    github: 'https://github.com/tarunrajukumar05-create',
    featured: false,
  },
]

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`glass-card glass-card-hover rounded-2xl overflow-hidden group ${
        project.featured ? 'ring-1 ring-gold-500/25' : ''
      }`}
    >
      {project.featured && (
        <div className="bg-gradient-to-r from-gold-600/20 to-gold-400/10 border-b border-gold-500/20 px-6 py-2">
          <span className="font-mono text-[10px] text-gold-400 tracking-widest uppercase">★ Featured Project</span>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/15 group-hover:bg-gold-500/20 transition-all duration-300">
            <project.icon size={22} className="text-gold-400" />
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-gold-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-gold-400 transition-colors"
              aria-label="View"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <h3 className="font-display text-lg font-semibold text-white mb-1 group-hover:text-gold-300 transition-colors">
          {project.title}
        </h3>
        <p className="font-mono text-[10px] text-gold-500/70 tracking-wider uppercase mb-3">
          {project.subtitle}
        </p>
        <p className="font-body text-sm text-slate-400 leading-relaxed mb-5">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-obsidian-600 border border-white/5 text-slate-400 text-[11px] font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-gold-500 tracking-[0.25em] uppercase mb-4"
          >
            03 / Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white"
          >
            Selected <span className="text-gradient-gold italic">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm mt-3 max-w-md mx-auto"
          >
            Projects focused on risk analysis, fraud detection, and operational data.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/tarunraju227"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-gold-400 transition-colors font-mono"
          >
            <Github size={15} />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
