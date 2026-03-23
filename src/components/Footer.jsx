import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-display text-gold-400 font-semibold mb-1">A Tarun Kumar Raju</p>
          <p className="font-body text-xs text-slate-500 max-w-sm">
            © 2026 Tarun Raju. Built with focus on fintech, operations, and user experience.{' '}
            <span className="text-gold-500">Open to Work.</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:tarunraju227@gmail.com"
            className="p-2 rounded-full border border-white/8 text-slate-500 hover:text-gold-400 hover:border-gold-500/30 transition-all"
          >
            <Mail size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/a-tarun-kumar-raju-064973298/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/8 text-slate-500 hover:text-gold-400 hover:border-gold-500/30 transition-all"
          >
            <Linkedin size={15} />
          </a>
          <a
            href="https://github.com/tarunrajukumar05-create"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/8 text-slate-500 hover:text-gold-400 hover:border-gold-500/30 transition-all"
          >
            <Github size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
