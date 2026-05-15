import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Quanto tempo ci vuole per creare il mio sito?",
      a: "Solitamente tra le 2 e le 4 settimane dalla conferma del progetto, dipende dalla complessità. Riceverai aggiornamenti regolari durante tutto il processo."
    },
    {
      q: "Posso vedere il sito mentre lo stai costruendo?",
      a: "Assolutamente sì. Condivido una versione di anteprima e ti chiedo feedback ad ogni fase. Il tuo sito viene fatto con te, non solo per te."
    },
    {
      q: "Ho bisogno di sapere qualcosa di tecnico?",
      a: "Zero. Mi occupo io di tutto — dal dominio all'hosting, dalla grafica al codice. Tu pensi al tuo lavoro, io penso al sito."
    },
    {
      q: "Cosa succede se non mi piace il risultato?",
      a: "Non è mai successo, ma se la prima bozza non ti soddisfa al 100%, rimborso integralmente. Lavoro con garanzia di soddisfazione."
    },
    {
      q: "Il sito funzionerà anche su smartphone?",
      a: "Sì, tutti i siti che creo sono ottimizzati per ogni dispositivo — smartphone, tablet e desktop. È una priorità assoluta."
    },
    {
      q: "Posso aggiornare il sito da solo dopo?",
      a: "Dipende dal tipo di sito. Per contenuti semplici (testi, foto, prezzi) sì, ti insegno come farlo. Per modifiche strutturali sono qui io."
    },
    {
      q: "Quanto costa il dominio e l'hosting?",
      a: "Non sono inclusi nel prezzo base perché variano (solitamente €50-150/anno). Ti guido nella scelta migliore per il tuo budget."
    },
    {
      q: "Posso richiedere modifiche dopo la consegna?",
      a: "Includo 30 giorni di supporto post-lancio per piccole correzioni. Per modifiche più estese, ho pacchetti di manutenzione mensili."
    },
    {
      q: "Lavori solo con certi tipi di attività?",
      a: "Sono specializzato in piccole imprese e professionisti locali (ristoranti, studi, artigiani, liberi professionisti, negozi). Se hai un'attività diversa, parliamone — probabilmente posso aiutarti."
    },
    {
      q: "Come mi contatti dopo aver mandato la richiesta?",
      a: "Rispondo via email entro 24 ore (di solito molto prima). Poi organizziamo una call gratuita di 30 minuti per capire il tuo progetto."
    }
  ];

  return (
    <section className="bg-bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="font-mono text-sm tracking-widest text-accent-gold uppercase">
            FAQ
          </span>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl leading-tight">
            Hai domande? <span className="italic">Ho le risposte.</span>
          </h2>
        </div>

        <div className="space-y-1">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-border-gold/50 relative"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between py-6 text-left group"
                >
                  <span className="text-lg font-medium text-text-primary group-hover:text-accent-gold transition-colors pr-8">
                    {faq.q}
                  </span>
                  <span 
                    className={cn(
                      "text-accent-gold text-2xl font-light transition-transform duration-300",
                      isOpen ? "rotate-45" : "rotate-0"
                    )}
                  >
                    +
                  </span>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 text-text-secondary leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
