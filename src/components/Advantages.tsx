import { motion } from 'motion/react';

export default function Advantages() {
  const cards = [
    {
      title: 'VELOCITÀ REALE',
      desc: 'Non aspetti mesi. I progetti vengono consegnati in 2-4 settimane con aggiornamenti settimanali sul progresso.'
    },
    {
      title: 'PREZZO ONESTO',
      desc: 'Nessun abbonamento nascosto, nessun costo extra a sorpresa. Sai esattamente quanto spendi prima di iniziare.'
    },
    {
      title: 'TU AL CENTRO',
      desc: 'Il sito viene costruito attorno alla tua attività, non su un template uguale per tutti.'
    },
    {
      title: 'SUPPORTO VERO',
      desc: 'Non sparisco dopo la consegna. Rimango il tuo punto di riferimento per qualsiasi necessità futura.'
    }
  ];

  return (
    <section className="bg-bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-16">
          <span className="font-mono text-sm tracking-widest text-accent-gold uppercase">
            I Vantaggi
          </span>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl leading-tight">
            La differenza che senti <br className="hidden sm:block"/>dal primo giorno.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border border-border-gold bg-bg-card p-10 transition-colors hover:border-accent-gold/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex items-start gap-4">
                <span className="text-accent-gold text-xl leading-none mt-1">⬦</span>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-text-primary uppercase mb-3">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
