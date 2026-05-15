import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background texture/noise fallback (simulated with radial gradient) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,110,0.08)_0%,transparent_50%)]" />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 font-mono text-sm tracking-[0.2em] text-accent-gold uppercase"
        >
          Portfolio · Web Design Professionale
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display mb-6 text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-[80px]"
        >
          Trasformo la tua idea <br />
          <span className="italic text-accent-gold">in un sito che vende.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mb-10 max-w-[520px] text-lg leading-relaxed text-text-secondary"
        >
          Creo siti web su misura per piccole imprese e professionisti italiani.
          Ogni progetto è pensato per attrarre clienti, non solo per essere
          bello.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#portfolio"
            className="group relative overflow-hidden bg-accent-gold px-8 py-4 text-bg-primary transition-transform hover:scale-105"
          >
            <span className="relative z-10 font-medium">
              Guarda i miei lavori →
            </span>
            <div className="absolute inset-0 z-0 bg-accent-gold-light opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#contatti"
            className="group px-8 py-4 text-accent-gold transition-all hover:bg-white/5"
            style={{ border: '1px solid var(--color-border-gold)' }}
          >
            <span className="font-medium">Parliamo del tuo progetto</span>
          </a>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 flex w-full max-w-xs items-center justify-center opacity-30"
        >
          <div className="h-px flex-1 bg-accent-gold" />
          <div className="mx-4 h-2 w-2 rotate-45 border border-accent-gold" />
          <div className="h-px flex-1 bg-accent-gold" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-text-muted">
            Scorri per scoprire
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-4 w-4 text-accent-gold opacity-70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
