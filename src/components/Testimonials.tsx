import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Non mi aspettavo un risultato così professionale. Il sito rispecchia perfettamente la nostra pizzeria e i clienti ci dicono sempre che sembra il sito di un grande ristorante. [NOME] è stato disponibile, puntuale e preciso. Consigliatissimo.",
      author: "[Nome Cliente]",
      role: "Titolare Pizzeria [Nome]",
      location: "[Città, Regione]"
    },
    {
      text: "Avevo paura che creare un sito fosse complicato e costoso. Con [NOME] è stato tutto semplice e chiaro fin dall'inizio. Il mio sito adesso mi porta nuovi clienti ogni settimana e trasmette esattamente la professionalità che volevo mostrare.",
      author: "[Nome Cliente]",
      role: "Massaggiatrice & Estetista",
      location: "[Città, Regione]"
    }
  ];

  return (
    <section className="bg-bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-sm tracking-widest text-accent-gold uppercase">
            Dicono di me
          </span>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl leading-tight">
            Le parole <span className="italic">dei miei clienti.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-border-gold/30 bg-bg-card p-8 relative"
            >
              <div className="text-accent-gold text-4xl font-display mb-4">"</div>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">{testimonial.text}</p>
              <div className="font-medium text-text-primary">{testimonial.author}</div>
              <div className="text-sm text-text-muted">{testimonial.role}</div>
              <div className="text-xs text-text-muted mt-1 font-mono uppercase tracking-widest">{testimonial.location}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
