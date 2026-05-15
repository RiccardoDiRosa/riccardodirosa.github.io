import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'SCOPERTA',
      desc: 'Parliamo del tuo business, i tuoi obiettivi e i tuoi clienti ideali. Una call gratuita di 30 minuti per capire esattamente cosa ti serve.'
    },
    {
      num: '02',
      title: 'PROPOSTA',
      desc: 'Ricevi una proposta dettagliata con tempi, costi e tutto incluso. Nessun costo nascosto, nessuna sorpresa finale.'
    },
    {
      num: '03',
      title: 'CREAZIONE',
      desc: 'Costruisco il tuo sito con aggiornamenti regolari. Sei sempre informato su ogni step del progresso.'
    },
    {
      num: '04',
      title: 'LANCIO & SUPPORTO',
      desc: 'Pubblichiamo insieme il sito. Rimango disponibile per modifiche e supporto anche dopo la consegna.'
    }
  ];

  return (
    <section className="bg-bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-2xl text-center mb-20">
          <span className="font-mono text-sm tracking-widest text-accent-gold uppercase">
            Il Processo
          </span>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl leading-tight">
            Semplice. Trasparente. <br className="hidden sm:block"/>Senza sorprese.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative border-l border-border-gold pl-6 py-2"
            >
              <div className="font-display text-5xl text-accent-gold mb-4 opacity-50">
                {step.num}
              </div>
              <h3 className="font-mono text-sm tracking-widest text-text-primary uppercase mb-3 text-accent-gold-light">
                · {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
