import { motion } from 'motion/react';
import { Rocket, Smartphone, Search, Paintbrush, ShieldCheck, CalendarCheck, Youtube } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <span className="font-mono text-sm tracking-widest text-accent-gold uppercase">
            Portfolio
          </span>
          <h2 className="font-display mt-4 mb-6 text-4xl sm:text-5xl leading-tight">
            Ogni sito racconta <br/>
            <span className="italic text-text-secondary">una storia di successo.</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Guarda come ho trasformato due attività locali in presenza digitale professionale.
          </p>
        </div>

        <div className="space-y-24">
          {/* Project 1: Pizzeria */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-xl border border-border-gold bg-bg-card p-6 sm:p-12"
          >
            <div className="mb-8">
               <span className="inline-block rounded border border-accent-gold/30 bg-accent-gold/5 px-3 py-1 font-mono text-xs tracking-wider text-accent-gold uppercase">
                 Progetto 01 · Ristorazione
               </span>
               <h3 className="font-display mt-6 text-3xl sm:text-4xl text-text-primary">
                 Sito Web per Pizzeria Artigianale
               </h3>
               <p className="mt-4 max-w-2xl text-lg text-text-secondary leading-relaxed">
                 Un sito appetitoso e funzionale per una pizzeria locale che voleva 
                 distinguersi dalla concorrenza.
               </p>
            </div>

            <div className="mb-10 flex w-full flex-col items-center">
               <div className="mb-4 w-full overflow-hidden rounded-lg border border-border-gold shadow-2xl">
                  <img 
                     src="/Screenshot 2026-01-13 181337.png" 
                     alt="Anteprima sito pizzeria" 
                     className="w-full h-auto object-cover"
                  />
               </div>
               <a 
                  href="https://youtu.be/fXpioy5UOho" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-gold transition-colors hover:opacity-80"
               >
                  <Youtube className="h-5 w-5" />
                  <span>Guarda il video del progetto sul mio canale YouTube</span>
               </a>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 border-t border-border-gold pt-10">
               <div className="lg:w-1/2">
                 <h4 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6">Risultati Ottenuti</h4>
                 <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-bg-secondary rounded-lg border border-white/5">
                       <Rocket className="w-6 h-6 text-accent-gold mx-auto mb-3" />
                       <div className="font-display text-3xl text-accent-gold mb-1">98/100</div>
                       <div className="text-xs text-text-secondary uppercase">PageSpeed</div>
                    </div>
                    <div className="text-center p-4 bg-bg-secondary rounded-lg border border-white/5">
                       <Smartphone className="w-6 h-6 text-accent-gold mx-auto mb-3" />
                       <div className="font-display text-3xl text-accent-gold mb-1">100%</div>
                       <div className="text-xs text-text-secondary uppercase">Responsive</div>
                    </div>
                    <div className="text-center p-4 bg-bg-secondary rounded-lg border border-white/5">
                       <Search className="w-6 h-6 text-accent-gold mx-auto mb-3" />
                       <div className="font-display text-xl text-accent-gold mb-1 leading-tight mt-2 flex items-center justify-center h-[36px]">Ottimizzato</div>
                       <div className="text-xs text-text-secondary uppercase">SEO On-Page</div>
                    </div>
                 </div>
                 
                 <div className="mt-8 flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'SEO'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-text-secondary bg-white/5">{tag}</span>
                    ))}
                 </div>
               </div>

               <div className="lg:w-1/2">
                 <h4 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6">Cosa Include</h4>
                 <ul className="space-y-4 text-text-secondary">
                    <li className="flex items-start gap-3"><span className="text-accent-gold mt-1">✓</span> Menu digitale aggiornabile</li>
                    <li className="flex items-start gap-3"><span className="text-accent-gold mt-1">✓</span> Galleria foto piatti in alta risoluzione</li>
                    <li className="flex items-start gap-3"><span className="text-accent-gold mt-1">✓</span> Integrazione Google Maps</li>
                    <li className="flex items-start gap-3"><span className="text-accent-gold mt-1">✓</span> Ottimizzazione per ricerche locali</li>
                 </ul>
               </div>
            </div>
          </motion.div>


          {/* Project 2: Massage Therapist */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-xl border border-border-gold bg-bg-card p-6 sm:p-12"
          >
            <div className="mb-8">
               <span className="inline-block rounded border border-[#E8C98E]/30 bg-[#E8C98E]/5 px-3 py-1 font-mono text-xs tracking-wider text-[#E8C98E] uppercase">
                 Progetto 02 · Benessere & Massaggi
               </span>
               <h3 className="font-display mt-6 text-3xl sm:text-4xl text-text-primary">
                 Sito Web per Professionista del Benessere
               </h3>
               <p className="mt-4 max-w-2xl text-lg text-text-secondary leading-relaxed">
                 Un sito elegante e rilassante per una massaggiatrice professionista 
                 che voleva trasmettere fiducia e ricevere prenotazioni online.
               </p>
            </div>

            <div className="mb-10 flex w-full flex-col items-center">
               <div className="mb-4 w-full overflow-hidden rounded-lg border border-border-gold shadow-2xl">
                  <img 
                     src="/Screenshot 2026-05-14 102135.png" 
                     alt="Anteprima sito benessere" 
                     className="w-full h-auto object-cover"
                  />
               </div>
               <a 
                  href="https://youtu.be/5LZyvV5j4xQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#E8C98E] transition-colors hover:opacity-80"
               >
                  <Youtube className="h-5 w-5" />
                  <span>Guarda il video del progetto sul mio canale YouTube</span>
               </a>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 border-t border-border-gold pt-10">
               <div className="lg:w-1/2">
                 <h4 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6">Risultati Ottenuti</h4>
                 <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-bg-secondary rounded-lg border border-white/5">
                       <Paintbrush className="w-6 h-6 text-accent-gold mx-auto mb-3" />
                       <div className="font-display text-xl text-accent-gold mb-1 leading-tight flex items-center justify-center h-[36px]">Premium</div>
                       <div className="text-xs text-text-secondary uppercase">Look & Feel</div>
                    </div>
                    <div className="text-center p-4 bg-bg-secondary rounded-lg border border-white/5">
                       <ShieldCheck className="w-6 h-6 text-accent-gold mx-auto mb-3" />
                       <div className="font-display text-base sm:text-xl text-accent-gold mb-1 leading-tight flex items-center justify-center h-[36px]">Immediata</div>
                       <div className="text-xs text-text-secondary uppercase">Fiducia</div>
                    </div>
                    <div className="text-center p-4 bg-bg-secondary rounded-lg border border-white/5">
                       <CalendarCheck className="w-6 h-6 text-accent-gold mx-auto mb-3" />
                       <div className="font-display text-xl text-accent-gold mb-1 leading-tight flex items-center justify-center h-[36px]">Integrato</div>
                       <div className="text-xs text-text-secondary uppercase">Booking Online</div>
                    </div>
                 </div>
                 
                 <div className="mt-8 flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'Prenotazioni Online', 'UI/UX'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-text-secondary bg-white/5">{tag}</span>
                    ))}
                 </div>
               </div>

               <div className="lg:w-1/2">
                 <h4 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6">Cosa Include</h4>
                 <ul className="space-y-4 text-text-secondary">
                    <li className="flex items-start gap-3"><span className="text-accent-gold mt-1">✓</span> Presentazione servizi e trattamenti</li>
                    <li className="flex items-start gap-3"><span className="text-accent-gold mt-1">✓</span> Sistema prenotazione appuntamenti</li>
                    <li className="flex items-start gap-3"><span className="text-accent-gold mt-1">✓</span> Galleria ambiente e certificazioni</li>
                    <li className="flex items-start gap-3"><span className="text-accent-gold mt-1">✓</span> Sezione "Chi sono" professionale</li>
                    <li className="flex items-start gap-3"><span className="text-accent-gold mt-1">✓</span> Testimonianze clienti integrate</li>
                 </ul>
               </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
            <p className="text-text-secondary text-lg mb-8">
               Hai un'attività simile? Posso creare qualcosa di ancora migliore per te.
            </p>
            <a
              href="#contatti"
              className="inline-block relative overflow-hidden bg-accent-gold px-8 py-4 text-bg-primary font-medium transition-transform hover:scale-105"
            >
              Parliamo del tuo progetto →
            </a>
        </div>

      </div>
    </section>
  );
}
