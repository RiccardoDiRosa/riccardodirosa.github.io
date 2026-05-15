import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Chi Sono', href: '#chi-sono' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contatti', href: '#contatti' },
  ];

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled ? "bg-bg-primary/90 backdrop-blur-md border-b border-border-gold/30 py-4" : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="font-display text-2xl text-accent-gold italic font-medium tracking-wide">
            [Riccardo]
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-[#F5F0E8]">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="hover:text-accent-gold transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a 
              href="#contatti"
              className="border border-border-gold px-5 py-2 text-accent-gold transition-colors hover:bg-accent-gold hover:text-bg-primary"
            >
              Richiedi Preventivo
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-accent-gold p-2 -mr-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-bg-primary pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 font-display text-4xl text-center items-center justify-center h-full pb-32">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-text-primary hover:text-accent-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contatti"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 font-mono text-sm tracking-widest uppercase border border-accent-gold text-accent-gold px-8 py-4 w-full max-w-xs"
              >
                Richiedi Preventivo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
