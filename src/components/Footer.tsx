import { Cpu, Crosshair } from 'lucide-react';
import { useLang } from '@/hooks/useLang';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative border-t border-neon-cyan/20 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center">
              <div className="absolute inset-0 rotate-45 border-2 border-neon-cyan/60" />
              <Cpu className="h-4 w-4 text-neon-cyan" />
            </div>
            <div className="font-display font-black tracking-wider">
              <span className="text-neon-cyan">DXT</span> <span className="text-white">CUSTOM</span>
            </div>
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
            {t.footer.tagline} // © {new Date().getFullYear()} DXT Custom
          </p>

          <div className="flex items-center gap-4">
            {[Crosshair, Cpu, Crosshair].map((Icon, i) => (
              <a
                key={i}
                href="https://discord.gg/dxtcustom"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-neon-cyan"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
