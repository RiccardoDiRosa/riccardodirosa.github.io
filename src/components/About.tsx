import { motion } from 'motion/react';
import { Target, MessageSquare, LineChart, HandHeart } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Target, text: 'Attenzione totale al tuo progetto' },
    { icon: MessageSquare, text: 'Comunicazione diretta e trasparente' },
    { icon: LineChart, text: 'Risultati misurabili, non solo estetica' },
    { icon: HandHeart, text: 'Supporto anche dopo la consegna' },
  ];

  return (
    <section id="chi-sono" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="font-mono text-sm tracking-widest text-accent-gold uppercase">
              Chi Sono
            </span>
            <h2 className="font-display mt-6 mb-8 text-4xl leading-tight sm:text-5xl">
              Non sono una grande agenzia.<br/>
              <span className="italic text-text-secondary">Sono meglio.</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                Mi chiamo Riccardo e sono un web designer freelance specializzato nel creare 
                siti web che fanno crescere le piccole imprese italiane. Lavoro direttamente 
                con te — nessun intermediario, nessuna burocrazia, zero perdite di tempo.
              </p>
              <p>
                Quando lavori con me, non parli con un account manager che poi passa 
                il lavoro a qualcun altro. Parli direttamente con la persona che costruirà 
                il tuo sito, dalla prima idea alla pubblicazione finale.
              </p>
            </div>

            <ul className="mt-10 space-y-4">
              {values.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <item.icon className="h-5 w-5 text-accent-gold" />
                  <span className="text-text-primary">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Stats Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 lg:pl-10"
          >
            <div className="flex h-full flex-col justify-center border border-border-gold bg-bg-card p-10 text-center relative overflow-hidden group hover:border-accent-gold/40 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-accent-gold/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 mb-12">
                <div className="font-display text-7xl italic text-accent-gold mb-2">100%</div>
                <div className="text-sm font-medium uppercase tracking-wider text-text-secondary">
                  dei clienti tornerebbero <br/>a lavorare con me
                </div>
              </div>

              <div className="relative z-10 mx-auto mb-12 w-16 border-t border-border-gold" />

              <div className="relative z-10">
                <div className="font-display text-7xl italic text-accent-gold mb-2">48h</div>
                <div className="text-sm font-medium uppercase tracking-wider text-text-secondary">
                  tempo medio di <br/>risposta garantito
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
