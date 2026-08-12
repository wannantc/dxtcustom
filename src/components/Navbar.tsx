import { useEffect, useState } from 'react';
import { Menu, X, Cpu, Contrast } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [monochrome, setMonochrome] = useState(false);

  const links = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.tiers, href: '#tiers' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.metrics, href: '#stats' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !monochrome;
    setMonochrome(next);
    document.documentElement.classList.toggle('monochrome', next);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? 'glass border-b border-neon-cyan/20 py-3' : 'py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#hero" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center">
            <div className="absolute inset-0 rotate-45 border-2 border-neon-cyan/60 transition-transform duration-500 group-hover:rotate-[135deg]" />
            <Cpu className="h-5 w-5 text-neon-cyan" />
          </div>
          <div className="font-display font-black tracking-wider">
            <span className="text-glow-cyan text-neon-cyan">DXT</span>{' '}
            <span className="text-white">CUSTOM</span>
          </div>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative font-display text-xs uppercase tracking-widest text-slate-300 transition-colors hover:text-neon-cyan"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-neon-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={monochrome ? 'Ativar cores neon' : 'Ativar preto e branco'}
            title={monochrome ? 'Ativar cores neon' : 'Ativar preto e branco'}
            className={`flex h-9 w-9 items-center justify-center border transition-colors ${monochrome ? 'border-white/60 text-white' : 'border-neon-cyan/30 text-neon-cyan hover:border-neon-cyan'}`}
          >
            <Contrast className="h-4 w-4" />
          </button>
          <LanguageSwitcher />
          <a
            href="#contact"
            className="btn-neon hidden bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan hover:text-ink-900 hover:shadow-neon-cyan lg:inline-block"
          >
            {t.nav.cta}
          </a>
          <button
            className="text-neon-cyan lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mt-3 mx-6 border border-neon-cyan/20 p-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-sm uppercase tracking-widest text-slate-300 hover:text-neon-cyan"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
