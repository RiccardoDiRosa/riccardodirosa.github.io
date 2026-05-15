import { Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <div id="contatti" className="bg-[#050505]">
      {/* Final CTA Area */}
      <section className="py-32 px-6 text-center">
        <h2 className="font-display text-5xl sm:text-6xl italic text-text-primary mb-6">
          Pronto a fare il salto?
        </h2>
        <p className="text-xl text-text-secondary mb-12">
          Inizia con una conversazione. È gratuita.
        </p>
        
        <a 
          href="mailto:new.riccardo.dirosa@tuamail.com"
          className="inline-block bg-accent-gold px-12 py-5 text-lg font-medium text-bg-primary transition-transform hover:scale-105 mb-8"
        >
          Scrivimi ora →
        </a>
        
        <div className="font-mono text-sm tracking-wider text-text-muted">
          new.riccardo.dirosa@gmail.com · WhatsApp: +39 351 866 6480
        </div>
      </section>

      {/* Actual Footer */}
      <footer className="border-t border-border-gold/30 mt-8 py-12 px-6 lg:px-8">
         <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-8 md:flex-row">
            
            {/* Left */}
            <div className="text-center md:text-left">
               <div className="font-display text-2xl text-accent-gold mb-1">
                 [Riccardo Di Rosa]
               </div>
               <div className="text-text-secondary text-sm">
                 Web Designer Freelance · Italia
               </div>
            </div>

            {/* Center Navigation */}
            <nav className="flex gap-8 text-sm tracking-widest text-text-muted hover:text-text-secondary transition-colors uppercase font-mono">
               <a href="#chi-sono" className="hover:text-accent-gold transition-colors">Chi sono</a>
               <a href="#portfolio" className="hover:text-accent-gold transition-colors">Lavori</a>
               <a href="#contatti" className="hover:text-accent-gold transition-colors">Contatti</a>
            </nav>

            {/* Right Socials */}
            <div className="flex gap-6">
               <a href="www.linkedin.com/in/riccardo-di-rosa-4b972439a" className="text-text-muted hover:text-accent-gold transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
               </a>
            </div>

         </div>

         {/* Bottom Copyright */}
         <div className="mt-16 text-center font-mono text-xs text-text-muted">
            {`© ${new Date().getFullYear()} [Riccardo] · Tutti i diritti riservati`}
         </div>
      </footer>
    </div>
  );
}
