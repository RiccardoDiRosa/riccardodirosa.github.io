import { motion } from 'motion/react';

export default function Pricing() {
  const vetrina = [
    'Design personalizzato (non template)',
    'Responsive per tutti i dispositivi',
    'Pagine: Home, Menu/Carta, Chi Siamo, Contatti',
    'Integrazione Google Maps',
    'Form di contatto semplice',
    'Ottimizzazione SEO di base',
    'Velocità ottimizzata',
    'Consegna in 1–2 settimane',
  ];

  const inclusions = [
    'Design personalizzato (non template)',
    'Responsive per tutti i dispositivi',
    'Ottimizzazione SEO di base',
    'Form di contatto / prenotazione',
    'Integrazione Google Maps',
    'Velocità ottimizzata',
    '30 giorni supporto post-lancio',
    'Consegna in 2-4 settimane'
  ];

  const maintenance = [
    'Aggiornamenti CMS & plugin (sicurezza)',
    'Backup automatico settimanale',
    'Monitoraggio uptime 24/7',
    'Piccole modifiche testi & immagini',
    'Report mensile performance SEO',
    'Supporto via email prioritario',
  ];

  return (
    <section id="prezzo" className="relative py-32 overflow-hidden flex flex-col items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,169,110,0.1)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">

        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-sm tracking-widest text-accent-gold uppercase">
            Inizia Oggi
          </span>
          <h2 className="font-display mt-4 mb-6 text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Il tuo sito web professionale <br />
            <span className="italic">ti aspetta.</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Ogni giorno senza un sito web professionale è un cliente che va dalla concorrenza.
          </p>
        </div>

        {/* ── Card 0: Sito Vetrina ── full width entry-level */}
        <div className="mx-auto max-w-5xl mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="border border-border-gold/40 bg-bg-card/50 p-8 sm:p-10 relative text-left"
          >
            <div className="absolute inset-0 bg-accent-gold/0 transition-colors hover:bg-accent-gold/5" />

            <div className="relative z-10">
              {/* Top row: badge + "ideale per" pill */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-block border border-accent-gold/25 bg-accent-gold/8 px-4 py-1.5 font-mono text-xs font-semibold tracking-widest text-accent-gold/80 uppercase">
                  ⬦ Sito Vetrina
                </div>
                <div className="inline-block bg-accent-gold/10 px-3 py-1 font-mono text-xs tracking-wider text-accent-gold/70 uppercase">
                  🍕 Ideale per pizzerie · bar · trattorie · parrucchieri
                </div>
              </div>

              {/* Two-column layout: explanation left, features right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                {/* Left: plain-language explanation */}
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-text-primary mb-4 leading-snug">
                      La tua insegna digitale,<br />
                      <span className="italic text-accent-gold/80">senza complicazioni.</span>
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      Pensa al tuo sito come a una vetrina sul corso principale. I clienti passano, guardano il menu, trovano l'indirizzo e ti chiamano. <strong className="text-text-primary">Non serve altro.</strong>
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      Il <span className="text-text-primary font-medium">Pacchetto Completo (€890)</span> è diverso: include un database — cioè una struttura che permette agli utenti di registrarsi, fare ordini online, gestire prenotazioni in tempo reale o avere contenuti che cambiano automaticamente. Funziona come un piccolo gestionale.
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Se invece hai bisogno di essere trovato su Google, mostrare il menu e far capire dove sei, <span className="text-text-primary font-medium">il Sito Vetrina fa esattamente questo</span> — a metà prezzo, pronto in una settimana.
                    </p>
                  </div>

                  {/* Comparison pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div className="border border-accent-gold/20 px-4 py-3 text-text-secondary">
                      <div className="text-accent-gold/60 uppercase tracking-widest mb-1">Vetrina</div>
                      Menu da leggere · Orari · Mappa · Telefono
                    </div>
                    <div className="border border-accent-gold/20 px-4 py-3 text-text-secondary">
                      <div className="text-accent-gold/60 uppercase tracking-widest mb-1">Completo</div>
                      Ordini online · Prenotazioni · Login utenti · Gestione contenuti
                    </div>
                  </div>
                </div>

                {/* Right: features + price + CTA */}
                <div className="flex flex-col">
                  <ul className="space-y-3 mb-8 text-text-primary text-sm">
                    {vetrina.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-accent-gold/80 mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="text-center border-t border-b border-border-gold/40 py-6 mb-6 mt-auto">
                    <div className="text-text-secondary text-xs uppercase tracking-widest mb-2 font-mono">Prezzo fisso</div>
                    <div className="font-display text-6xl sm:text-7xl text-accent-gold/85 mb-1">
                      €490
                    </div>
                    <div className="text-sm text-text-muted mt-2">
                      Pagamento unico · Preventivo gratuito
                    </div>
                  </div>

                  <a
                    href="#contatti"
                    className="block w-full border border-accent-gold/50 py-4 text-center text-accent-gold/90 font-medium transition-all hover:bg-accent-gold hover:text-bg-primary hover:scale-[1.02] mb-3"
                  >
                    Inizia con la Vetrina →
                  </a>
                  <p className="font-mono text-xs text-text-muted text-center">
                    Aggiornabile al Pacchetto Completo in futuro
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cards grid — Completo + Manutenzione */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* ── Card 1: Sito Web Completo ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="border border-border-gold bg-bg-card p-8 sm:p-10 relative text-left h-full"
          >
            <div className="absolute inset-0 bg-accent-gold/0 transition-colors hover:bg-accent-gold/5" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="self-start inline-block border border-accent-gold/30 bg-accent-gold/10 px-4 py-1.5 font-mono text-xs font-semibold tracking-widest text-accent-gold uppercase mb-8">
                ⬦ Pacchetto Completo
              </div>

              <ul className="space-y-4 mb-10 text-text-primary">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-accent-gold mt-1 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mb-10 text-center border-t border-b border-border-gold py-8 mt-auto">
                <div className="text-text-secondary text-base uppercase tracking-widest mb-2 font-mono">A partire da</div>
                <div className="font-display text-6xl sm:text-7xl text-accent-gold mb-2">
                  €890
                </div>
                <div className="text-sm text-text-muted mt-3">
                  Pagamento rateizzabile · Preventivo gratuito
                </div>
              </div>

              <a
                href="#contatti"
                className="block w-full bg-accent-gold py-5 text-center text-bg-primary font-medium transition-transform hover:scale-[1.02] mb-4"
              >
                Richiedi il tuo preventivo gratuito →
              </a>

              <div className="font-mono text-xs text-text-muted mt-4 text-center">
                Rispondo entro 24 ore · Nessun impegno
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-text-secondary px-2">
                <span className="opacity-80">🔒</span> Se non sei soddisfatto al 100% dopo la prima bozza, ti rimborso integralmente.
              </div>
            </div>
          </motion.div>

          {/* ── Card 2: Manutenzione ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="border border-border-gold/50 bg-bg-card/60 p-8 sm:p-10 relative text-left h-full"
          >
            <div className="absolute inset-0 bg-accent-gold/0 transition-colors hover:bg-accent-gold/5" />

            {/* "Consigliato" badge */}
            <div className="absolute -top-3.5 right-6 bg-accent-gold px-4 py-1 font-mono text-xs font-bold tracking-widest text-bg-primary uppercase z-20">
              ★ Consigliato
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="self-start inline-block border border-accent-gold/20 bg-accent-gold/5 px-4 py-1.5 font-mono text-xs font-semibold tracking-widest text-accent-gold/80 uppercase mb-8">
                ⬦ Manutenzione
              </div>

              <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                Un sito non si gestisce da solo. Senza aggiornamenti regolari rischi falle di sicurezza, downtime e perdita di posizioni su Google. Penso a tutto io, tu ti concentri sul lavoro.
              </p>

              <ul className="space-y-4 mb-10 text-text-primary">
                {maintenance.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-accent-gold mt-1 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mb-10 text-center border-t border-b border-border-gold/50 py-8 mt-auto">
                <div className="text-text-secondary text-base uppercase tracking-widest mb-2 font-mono">Abbonamento mensile</div>
                <div className="font-display text-6xl sm:text-7xl text-accent-gold/90 mb-2">
                  €34,99
                </div>
                <div className="text-sm text-text-muted mt-3">
                  Disdici quando vuoi · Nessun vincolo
                </div>
              </div>

              <a
                href="#contatti"
                className="block w-full border border-accent-gold/60 py-5 text-center text-accent-gold font-medium transition-all hover:bg-accent-gold hover:text-bg-primary hover:scale-[1.02] mb-4"
              >
                Aggiungilo al tuo pacchetto →
              </a>

              <div className="font-mono text-xs text-text-muted mt-4 text-center">
                Attivabile anche dopo il lancio
              </div>

              <div className="mt-8 flex items-start gap-2 text-sm text-text-secondary px-2">
                <span className="opacity-80 shrink-0">💡</span>
                <span>Meno di un caffè al giorno per tenere il sito sicuro, veloce e aggiornato.</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Nota dominio & hosting ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-5xl mt-6"
        >
          <div className="border border-border-gold/30 bg-bg-card/40 px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left">
            <span className="text-accent-gold/70 text-xl shrink-0">ⓘ</span>
            <div>
              <p className="text-sm text-text-secondary leading-relaxed">
                <span className="text-text-primary font-medium">Non incluso nel pacchetto:</span> dominio e hosting sono a carico tuo e si rinnovano annualmente — di solito tra <span className="text-accent-gold/90">€15 e €120/anno</span> a seconda delle esigenze.{' '}
                Posso consigliarti la soluzione più adatta al tuo budget e al tipo di sito, così non spendi più del necessario. Qualora non dovessi scegliere la manutenzione (strategia super consigliato se non quasi essenziale), hai 30 giorni di assistenza post lancio gratuite, dal 31° giorno l assistenza diventa a pagamento e il costo sara di 45€/h.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}